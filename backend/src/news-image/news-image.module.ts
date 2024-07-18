import { Module } from '@nestjs/common';
import { NewsImageService } from './news-image.service';
import { NewsImageController } from './news-image.controller';
import { PrismaService } from '../prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [NewsImageController],
  providers: [NewsImageService, PrismaService, JwtService],
})
export class NewsImageModule {}
