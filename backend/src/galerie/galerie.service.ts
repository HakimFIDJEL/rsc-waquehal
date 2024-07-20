import { Injectable } from '@nestjs/common';
import { CreateGalerieDto } from './dto/create-galerie.dto';
import { UpdateGalerieDto } from './dto/update-galerie.dto';
import { PrismaService } from '../prisma.service';
import { ConflictException } from '@nestjs/common';
import { join } from 'path';
import { promises as fs } from 'fs';

@Injectable()
export class GalerieService {

  constructor (
    private prisma: PrismaService,
  ) {}

  // Récupération de toutes les galeries - Fait
  async findAll() {
    return await this.prisma.galerie.findMany();
  }

  // Récupération d'une galerie - Fait
  async findOne(id: number) {
    return await this.prisma.galerie.findUnique({
      where: { id }
    });
  }

  // Création d'une galerie - Fait
  async create(createGalerieDto: CreateGalerieDto) {
    return await this.prisma.galerie.create({
      data: createGalerieDto
    });
  }

  // Upload d'une image - Fait
  async upload(id: number, file: Express.Multer.File) {
    if (!file) {
      await this.remove(id);
      throw new ConflictException('Aucun fichier n\'a été uploadé');
    }

    const galerie = await this.prisma.galerie.findUnique({
      where: { id }
    });

    if (!galerie) {
      throw new ConflictException('La galerie associée n\'existe pas');
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

    return this.prisma.galerie.update({
      where: { id },
      data: {
        image: `/uploads/${filename}`
      }
    });
  }

  // Mise à jour d'une galerie - Fait
  async update(id: number, updateGalerieDto: UpdateGalerieDto) {

    const galerie = await this.prisma.galerie.findUnique({
      where: { id }
    });

    const image = galerie?.image;
    const filePath = join(__dirname, '..', '..', 'uploads', image.split('/').pop());

    if(image && await fs.stat(filePath).then(() => true).catch(() => false))
    {
      await fs.unlink(filePath);
    }

    return await this.prisma.galerie.update({
      where: { id },
      data: updateGalerieDto
    });
  }

  // Suppression d'une galerie - Fait
  async remove(id: number) {
    // delete team image
    const galerie = await this.prisma.galerie.findUnique({
      where: { id }
    });

    if (galerie?.image) {
      const filePath = join(__dirname, '..', '..', 'uploads', galerie.image.split('/').pop());

      // if the file exists, delete it
      if (await fs.stat(filePath).then(() => true).catch(() => false)) {
        await fs.unlink(filePath);
      }

    }

    // remove galerie
    return this.prisma.galerie.delete({
      where: { id }
    });
  }
}
