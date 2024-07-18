import { Injectable } from '@nestjs/common';
import { CreateActivityImageDto } from './dto/create-activity-image.dto';
import { UpdateActivityImageDto } from './dto/update-activity-image.dto';
import { PrismaService } from '../prisma.service';
import { ConflictException } from '@nestjs/common';
import { join } from 'path';
import { promises as fs } from 'fs';

@Injectable()
export class ActivityImageService {

  constructor(
    private prisma: PrismaService,
  ){}


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

    const uploadDir = join(__dirname, '..', '..', 'uploads');
    const uploadedFiles = [];

    await fs.mkdir(uploadDir, { recursive: true });

    for (const file of files) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      const filename = `${uniqueSuffix}-${file.originalname}`;
      const filePath = join(uploadDir, filename);

      await fs.writeFile(filePath, file.buffer);

      const image = await this.prisma.activityImage.create({
        data: {
          url: `/uploads/${filename}`,
          activityId: id,
        },
      });

      uploadedFiles.push(image);
    }

    return uploadedFiles;
  }

  async remove(id: number) 
  {
    const image = await this.prisma.activityImage.findUnique({
      where: {
        id: id
      }
    });

    if(!image) {
      throw new ConflictException('L\'image n\'existe pas');
    }

    await fs.unlink(join(__dirname, '..', '..', image.url));

    return await this.prisma.activityImage.delete({
      where: {
        id: id
      }
    });
  }





}
