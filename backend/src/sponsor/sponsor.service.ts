import { Injectable } from '@nestjs/common';
import { CreateSponsorDto } from './dto/create-sponsor.dto';
import { UpdateSponsorDto } from './dto/update-sponsor.dto';
import { PrismaService } from '../prisma.service';
import { ConflictException } from '@nestjs/common';
import { join } from 'path';
import { promises as fs } from 'fs';

@Injectable()
export class SponsorService {

  constructor(
    private prisma: PrismaService,
  ) {}
  
  // Récupération de tous les sponsors - Fait
  async findAll() {
    return await this.prisma.sponsor.findMany();
  }

  // Récupération d'un sponsor - Fait
  async findOne(id: number) {
    return await this.prisma.sponsor.findUnique({
      where: {id}
    });
  }

  // Upload d'une image - Fait
  async upload(id: number, file: Express.Multer.File) {
    if (!file) {
      await this.remove(id);
      throw new ConflictException('Aucun fichier n\'a été uploadé');
    }

    const sponsor = await this.prisma.sponsor.findUnique({
      where: { id }
    });

    if (!sponsor) {
      throw new ConflictException('Le sponsor n\'existe pas');
    }

    const uploadDir = join(__dirname, '..', '..', 'uploads');
    await fs.mkdir(uploadDir, { recursive: true });

    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const fileExtension = file.originalname.split('.').pop();
    const filename = `${uniqueSuffix}.${fileExtension}`;
    const filePath = join(uploadDir, filename);

    if (!file.buffer) {
      await this.remove(id);
      throw new ConflictException('Le contenu du fichier est manquant');
    }

    await fs.writeFile(filePath, file.buffer);

    return this.prisma.sponsor.update({
      where: { id },
      data: {
        image: `/uploads/${filename}`
      }
    });
  }

  async create(createSponsorDto: CreateSponsorDto) {
    return this.prisma.sponsor.create({
      data: createSponsorDto
    });
  }

  async update(id: number, updateSponsorDto: UpdateSponsorDto) {

    const sponsor = await this.prisma.sponsor.findUnique({
      where: { id }
    });

    const image = sponsor?.image;
    const filePath = join(__dirname, '..', '..', 'uploads', image.split('/').pop());

    if(image && await fs.stat(filePath).then(() => true).catch(() => false))
    {
      await fs.unlink(filePath);
    }

    return await this.prisma.sponsor.update({
      where: { id },
      data: updateSponsorDto
    });
  }

  async remove(id: number) {
    const sponsor = await this.prisma.sponsor.findUnique({
      where: { id }
    });

    if (!sponsor) {
      throw new ConflictException('Le sponsor n\'existe pas');
    }

    const image = join(__dirname, '..', '..', 'uploads', sponsor.image.split('/').pop());

    // Suppression de l'image
    if(await fs.stat(image).then(() => true).catch(() => false))
    {
      await fs.unlink(image);
    }

    return await this.prisma.sponsor.delete({
      where: { id }
    });
  }
}
