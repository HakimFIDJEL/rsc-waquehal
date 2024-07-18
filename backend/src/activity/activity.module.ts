import { Module } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { ActivityController } from './activity.controller';
import { PrismaService } from '../prisma.service';
import { ActivityImageService } from '../activity-image/activity-image.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [ActivityController],
  providers: [ActivityService, PrismaService, ActivityImageService, JwtService],
})
export class ActivityModule {}
