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

  // @Post()
  // create(@Body() createMatchCategoryDto: CreateMatchCategoryDto) {
  //   return this.matchCategoryService.create(createMatchCategoryDto);
  // }

  @Get()
  findAll() {
    return this.matchCategoryService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.matchCategoryService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateMatchCategoryDto: UpdateMatchCategoryDto) {
  //   return this.matchCategoryService.update(+id, updateMatchCategoryDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.matchCategoryService.remove(+id);
  // }
}
