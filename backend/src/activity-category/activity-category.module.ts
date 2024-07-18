import { Module } from '@nestjs/common';
import { ActivityCategoryService } from './activity-category.service';
import { ActivityCategoryController } from './activity-category.controller';
import { PrismaService } from '../prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [ActivityCategoryController],
  providers: [ActivityCategoryService, JwtService, PrismaService],
})
export class ActivityCategoryModule {}
