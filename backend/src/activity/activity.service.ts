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


  async findAll() 
  {
    const activities = await this.prisma.activity.findMany({
      include: {
        images: true,
        category: true
      }
    });
    return activities;
  }
  async create(createActivityDto: CreateActivityDto) 
  {
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

  async upload(id: number, files: Express.Multer.File[]) 
  {
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

  async remove(id: number) {
    const activity = await this.prisma.activity.findUnique({
      where: {
        id: id
      }
    });
    if(!activity) {
      throw new ConflictException('L\'activité n\'existe pas');
    }
    
    const images = await this.prisma.activityImage.findMany({
      where: {
        activityId: id
      }
    });

    for (const image of images) {
      await this.activityImage.remove(image.id);
    }

    return await this.prisma.activity.delete({
      where: {
        id: id
      }
    });
  }


  async findOne(id: number) 
  {
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
