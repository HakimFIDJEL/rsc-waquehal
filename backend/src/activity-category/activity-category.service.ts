import { Injectable } from '@nestjs/common';
import { CreateActivityCategoryDto } from './dto/create-activity-category.dto';
import { UpdateActivityCategoryDto } from './dto/update-activity-category.dto';
import { PrismaService } from '../prisma.service';
import { ConflictException } from '@nestjs/common';

@Injectable()
export class ActivityCategoryService {

  constructor(
    private prisma: PrismaService,
  ){}

  // Retournes toutes les catégories d'activités - Fait
  async findAll() {
    return await this.prisma.activityCategory.findMany();
  }

  // Création d'une catégorie d'activité - Fait
  async create(createActivityCategoryDto: CreateActivityCategoryDto) {
    return await this.prisma.activityCategory.create({
      data: createActivityCategoryDto
    });
  }

  // Mise à jour d'une catégorie d'activité - Fait
  async remove(id: number) {
    const activities = await this.prisma.activity.findMany({
      where: {
        categoryId: id
      }
    });

    if(activities.length > 0) {
      throw new ConflictException('Des activités sont associées à cette catégorie');
    }

    return await this.prisma.activityCategory.delete({
      where: {id}
    });
  }
}

