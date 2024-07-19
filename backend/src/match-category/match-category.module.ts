import { Module } from '@nestjs/common';
import { MatchCategoryService } from './match-category.service';
import { MatchCategoryController } from './match-category.controller';
import { PrismaService } from '../prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [MatchCategoryController],
  providers: [MatchCategoryService, PrismaService, JwtService],
})
export class MatchCategoryModule {}
