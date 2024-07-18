import { Module } from '@nestjs/common';
import { ActivityImageService } from './activity-image.service';
import { ActivityImageController } from './activity-image.controller';
import { PrismaService } from '../prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [ActivityImageController],
  providers: [ActivityImageService, PrismaService, ActivityImageService, JwtService],
})
export class ActivityImageModule {}
