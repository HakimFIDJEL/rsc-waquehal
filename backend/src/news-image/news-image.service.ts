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


  async upload(id: number, files: Express.Multer.File[]) 
  {



    const news = await this.prisma.news.findUnique({
      where: {
        id: id
      }
    });
    if(!news) {
      throw new ConflictException('L\'actualité n\'existe pas');
    }

    const uploadDir = join(__dirname, '..', '..', 'uploads');
    const uploadedFiles = [];

    await fs.mkdir(uploadDir, { recursive: true });

    for (const file of files) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      const filename = `${uniqueSuffix}-${file.originalname}`;
      const filePath = join(uploadDir, filename);

      await fs.writeFile(filePath, file.buffer);

      const image = await this.prisma.newsImage.create({
        data: {
          url: `/uploads/${filename}`,
          newsId: id,
        },
      });

      uploadedFiles.push(image);
    }

    return uploadedFiles;

  }

  async remove(id: number) 
  {
    const image = await this.prisma.newsImage.findUnique({
      where: {
        id: id
      }
    });

    if(!image) {
      throw new ConflictException('L\'image n\'existe pas');
    }

    await fs.unlink(join(__dirname, '..', '..', image.url));

    return await this.prisma.newsImage.delete({
      where: {
        id: id
      }
    });
  }

  async findById(id: number)
  {
    return await this.prisma.newsImage.findMany({
      where: {
        newsId: id
      }
    });
  }


  create(createNewsImageDto: CreateNewsImageDto) {
    return 'This action adds a new newsImage';
  }

  findAll() {
    return `This action returns all newsImage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} newsImage`;
  }

  update(id: number, updateNewsImageDto: UpdateNewsImageDto) {
    return `This action updates a #${id} newsImage`;
  }

  
}
