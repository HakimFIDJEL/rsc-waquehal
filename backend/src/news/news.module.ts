import { Module } from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsController } from './news.controller';
import { PrismaService } from 'src/prisma.service';
import { NewsImageService } from 'src/news-image/news-image.service';

@Module({
  controllers: [NewsController],
  providers: [NewsService, PrismaService, NewsImageService],
})
export class NewsModule {}
