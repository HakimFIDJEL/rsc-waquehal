import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ActivityCategoryService } from './activity-category.service';
import { CreateActivityCategoryDto } from './dto/create-activity-category.dto';
import { UpdateActivityCategoryDto } from './dto/update-activity-category.dto';

@Controller('activity-category')
export class ActivityCategoryController {
  constructor(private readonly activityCategoryService: ActivityCategoryService) {}

  @Post()
  create(@Body() createActivityCategoryDto: CreateActivityCategoryDto) {
    return this.activityCategoryService.create(createActivityCategoryDto);
  }

  @Get()
  findAll() {
    return this.activityCategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.activityCategoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateActivityCategoryDto: UpdateActivityCategoryDto) {
    return this.activityCategoryService.update(+id, updateActivityCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.activityCategoryService.remove(+id);
  }
}
