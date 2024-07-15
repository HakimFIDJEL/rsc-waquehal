import { Module } from '@nestjs/common';
import { NewsImageService } from './news-image.service';
import { NewsImageController } from './news-image.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [NewsImageController],
  providers: [NewsImageService, PrismaService],
})
export class NewsImageModule {}
