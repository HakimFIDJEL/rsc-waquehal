import { Injectable } from '@nestjs/common';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { PrismaService } from '../prisma.service';
import { NewsImageService } from '../news-image/news-image.service';
import { ConflictException } from '@nestjs/common';

@Injectable()
export class NewsService {

  constructor(
    private prisma: PrismaService,
    private newsImage: NewsImageService
  ){}

  // give a type to createNewsDto and images type file
  async create(createNewsDto: CreateNewsDto) {
    return await this.prisma.news.create({
      data: {
        title: createNewsDto.title,
        content: createNewsDto.content,
        status: createNewsDto.status,
      }
    });
  }

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
    
    return await this.newsImage.upload(id, files);
  }

  async remove(id: number) 
  {

    const images = await this.prisma.newsImage.findMany({
      where: {
        newsId: id
      }
    });

    for (const image of images) {
      await this.newsImage.remove(image.id);
    }

    return await this.prisma.news.delete({
      where: {
        id: id
      }
    });
  }

  async findAll(){
    const news = await this.prisma.news.findMany({
      include: {
        images: true
      }
    });
    return news;
  }

  async findOne(id: number) {
    const news = await this.prisma.news.findUnique({
      where: {
        id: id
      },
      include: {
        images: true
      }
    });
    return news
  }

  async update(id: number, updateNewsDto: UpdateNewsDto) 
  {
    const news = await this.prisma.news.findUnique({
      where: {
        id: id
      }
    });

    if(!news) {
      throw new ConflictException('L\'actualité n\'existe pas');
    }

    

    // On met à jour l'actualité
    return await this.prisma.news.update({
      where: {
        id: id
      },
      data: {
        title: updateNewsDto.title,
        content: updateNewsDto.content,
        status: updateNewsDto.status,
      }
    });
  }

  
}
