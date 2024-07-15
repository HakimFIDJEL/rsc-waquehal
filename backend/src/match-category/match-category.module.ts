import { Module } from '@nestjs/common';
import { MatchCategoryService } from './match-category.service';
import { MatchCategoryController } from './match-category.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [MatchCategoryController],
  providers: [MatchCategoryService, PrismaService],
})
export class MatchCategoryModule {}
