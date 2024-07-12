import { Injectable } from '@nestjs/common';
import { CreateMatchCategoryDto } from './dto/create-match-category.dto';
import { UpdateMatchCategoryDto } from './dto/update-match-category.dto';

@Injectable()
export class MatchCategoryService {
  create(createMatchCategoryDto: CreateMatchCategoryDto) {
    return 'This action adds a new matchCategory';
  }

  findAll() {
    return `This action returns all matchCategory`;
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
