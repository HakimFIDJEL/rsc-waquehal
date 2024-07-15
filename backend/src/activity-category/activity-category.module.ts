import { Module } from '@nestjs/common';
import { ActivityCategoryService } from './activity-category.service';
import { ActivityCategoryController } from './activity-category.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [ActivityCategoryController],
  providers: [ActivityCategoryService, PrismaService],
})
export class ActivityCategoryModule {}
