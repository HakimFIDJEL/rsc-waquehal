import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { MatchCategoryService } from './match-category.service';
import { CreateMatchCategoryDto } from './dto/create-match-category.dto';
import { UpdateMatchCategoryDto } from './dto/update-match-category.dto';
import { JwtGuard } from '../auth/guards/jwt.guard';

@Controller('match-category')
export class MatchCategoryController {
  constructor(
    private readonly matchCategoryService: MatchCategoryService,
  ) {}

 

  @Get()
  async findAll() {
    return this.matchCategoryService.findAll();
  }

 
}
