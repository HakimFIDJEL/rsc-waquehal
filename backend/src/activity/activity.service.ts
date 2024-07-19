import { Injectable } from '@nestjs/common';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { PrismaService } from '../prisma.service';
import { ActivityImageService } from '../activity-image/activity-image.service';
import { ConflictException } from '@nestjs/common';

@Injectable()
export class ActivityService {

  constructor(
    private prisma: PrismaService,
    private activityImage: ActivityImageService
  ){}


  // Retournes toutes les activités - Fait
  async findAll() {
    return await this.prisma.activity.findMany({
      include: {
        images: true,
        category: true
      }
    });
  }

  // Création d'une activité - Fait
  async create(createActivityDto: CreateActivityDto) {
    return await this.prisma.activity.create({
      data: {
        name: createActivityDto.name,
        description: createActivityDto.description,
        website: createActivityDto.website,
        status: createActivityDto.status,
        category: {
          connect: {
            id: createActivityDto.categoryId
          }
        }
      }
    });
  }

  // Upload d'une ou plusieurs image(s) - Fait
  async upload(id: number, files: Express.Multer.File[]) {
    const activity = await this.prisma.activity.findUnique({
      where: {
        id: id
      }
    });
    if(!activity) {
      throw new ConflictException('L\'activité n\'existe pas');
    }
    return await this.activityImage.upload(id, files);
  }

  // Suppression d'une activité - Fait
  async remove(id: number) {
    // On récupère l'activité
    const activity = await this.prisma.activity.findUnique({
      where: {
        id: id
      }
    });

    // Si l'activité n'existe pas on retourne une erreur
    if(!activity) {
      throw new ConflictException('L\'activité n\'existe pas');
    }
    
    // On récupère les images de l'activité
    const images = await this.prisma.activityImage.findMany({
      where: {
        activityId: id
      }
    });

    // Pour chaque image, on la supprime
    for (const image of images) {
      await this.activityImage.remove(image.id);
    }

    // On supprime l'activité
    return await this.prisma.activity.delete({
      where: {
        id: id
      }
    });
  }


  // Récupération d'une activité - Fait
  async findOne(id: number) {
    return await this.prisma.activity.findUnique({
      where: {
        id: id
      },
      include: {
        images: true,
        category: true
      }
    });
  }

  // Mise à jour d'une activité - Fait
  async update(id: number, updateActivityDto: UpdateActivityDto) {
    const activity = await this.prisma.activity.findUnique({
      where: {
        id: id
      }
    });
    if(!activity) {
      throw new ConflictException('L\'activité n\'existe pas');
    }
    return await this.prisma.activity.update({
      where: {
        id: id
      },
      data: {
        name: updateActivityDto.name,
        description: updateActivityDto.description,
        website: updateActivityDto.website,
        status: updateActivityDto.status,
        category: {
          connect: {
            id: updateActivityDto.categoryId
          }
        }
      }
    });
  }

  
}
