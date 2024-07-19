import { Injectable } from '@nestjs/common';
import { CreateNewsImageDto } from './dto/create-news-image.dto';
import { UpdateNewsImageDto } from './dto/update-news-image.dto';
import { PrismaService } from '../prisma.service';
import { ConflictException } from '@nestjs/common';
import { join } from 'path';
import { promises as fs } from 'fs';

@Injectable()
export class NewsImageService {
  constructor(
    private prisma: PrismaService,
  ){}


  // Upload d'une ou plusieurs image(s) - Fait
  async upload(id: number, files: Express.Multer.File[]) 
  {
    // On récupère l'actualité
    const news = await this.prisma.news.findUnique({
      where: {
        id: id
      }
    });

    // Si l'actualité n'existe pas on retourne une erreur
    if(!news) {
      throw new ConflictException('L\'actualité n\'existe pas');
    }

    // On crée le dossier d'upload
    const uploadDir = join(__dirname, '..', '..', 'uploads');
    const uploadedFiles = [];
    await fs.mkdir(uploadDir, { recursive: true });

    // Pour chaque fichier
    for (const file of files) {
      // On crée un nom unique
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      const filename = `${uniqueSuffix}-${file.originalname}`;
      const filePath = join(uploadDir, filename);

      // On écrit le fichier
      await fs.writeFile(filePath, file.buffer);

      // On crée l'image dans la base de données
      const image = await this.prisma.newsImage.create({
        data: {
          url: `/uploads/${filename}`,
          newsId: id,
        },
      });

      // On ajoute l'image à la liste des images uploadées
      uploadedFiles.push(image);
    }

    // On retourne les images uploadées
    return uploadedFiles;
  }

  // Suppression d'une image - Fait
  async remove(id: number) 
  {
    // On récupère l'image
    const image = await this.prisma.newsImage.findUnique({
      where: {
        id: id
      }
    });

    // Si l'image n'existe pas on retourne une erreur
    if(!image) {
      throw new ConflictException('L\'image n\'existe pas');
    }

    // Si l'image existe
    if(await fs.stat(join(__dirname, '..', '..', image.url)).then(() => true).catch(() => false))
    {
      // On supprime l'image
      await fs.unlink(join(__dirname, '..', '..', image.url));
    }

    // On supprime l'image de la base de données
    return await this.prisma.newsImage.delete({
      where: {
        id: id
      }
    });
  }
}
