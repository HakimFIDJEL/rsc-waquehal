import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ActivityCategoryService } from './activity-category.service';
import { CreateActivityCategoryDto } from './dto/create-activity-category.dto';
import { UpdateActivityCategoryDto } from './dto/update-activity-category.dto';
import { JwtGuard } from '../auth/guards/jwt.guard';

@Controller('activity-category')
export class ActivityCategoryController {
  constructor(private readonly activityCategoryService: ActivityCategoryService) {}

  

  @Get()
  findAll() {
    return this.activityCategoryService.findAll();
  }

  @UseGuards(JwtGuard)
  @Post()
  create(@Body() createActivityCategoryDto: CreateActivityCategoryDto) {
    return this.activityCategoryService.create(createActivityCategoryDto);
  }

  @UseGuards(JwtGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.activityCategoryService.remove(+id);
  }



  
}
