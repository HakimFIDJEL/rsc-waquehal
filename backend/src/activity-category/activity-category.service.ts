import { Injectable } from '@nestjs/common';
import { CreateActivityCategoryDto } from './dto/create-activity-category.dto';
import { UpdateActivityCategoryDto } from './dto/update-activity-category.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ActivityCategoryService {

  constructor(
    private prisma: PrismaService,
  ){}


  async findAll() {
    const activityCategories = await this.prisma.activityCategory.findMany();
    return activityCategories;
  }

  async create(createActivityCategoryDto: CreateActivityCategoryDto) 
  {
    const activityCategory = await this.prisma.activityCategory.create({
      data: createActivityCategoryDto
    });
    return activityCategory;
  }

  async remove(id: number) {
    const activityCategory = await this.prisma.activityCategory.delete({
      where: {id}
    });
    return activityCategory;
  }
}

