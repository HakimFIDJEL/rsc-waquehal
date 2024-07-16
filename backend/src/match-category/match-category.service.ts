import { Injectable } from '@nestjs/common';
import { CreateMatchCategoryDto } from './dto/create-match-category.dto';
import { UpdateMatchCategoryDto } from './dto/update-match-category.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class MatchCategoryService {

  constructor(
    private prisma: PrismaService,
  ){}

  create(createMatchCategoryDto: CreateMatchCategoryDto) {
    return 'This action adds a new matchCategory';
  }

  async findAll() {
    return await this.prisma.matchCategory.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} matchCategory`;
  }

  update(id: number, updateMatchCategoryDto: UpdateMatchCategoryDto) {
    return `This action updates a #${id} matchCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} matchCategory`;
  }
}
