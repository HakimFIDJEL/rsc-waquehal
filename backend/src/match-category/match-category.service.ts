import { Injectable } from '@nestjs/common';
import { CreateMatchCategoryDto } from './dto/create-match-category.dto';
import { UpdateMatchCategoryDto } from './dto/update-match-category.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class MatchCategoryService {

  constructor(
    private prisma: PrismaService,
  ){}



  async findAll() {
    return await this.prisma.matchCategory.findMany();
  }

 
}
