import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ActivityImageService } from './activity-image.service';
import { CreateActivityImageDto } from './dto/create-activity-image.dto';
import { UpdateActivityImageDto } from './dto/update-activity-image.dto';

@Controller('activity-image')
export class ActivityImageController {
  constructor(private readonly activityImageService: ActivityImageService) {}

  @Post()
  create(@Body() createActivityImageDto: CreateActivityImageDto) {
    return this.activityImageService.create(createActivityImageDto);
  }

  @Get()
  findAll() {
    return this.activityImageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.activityImageService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateActivityImageDto: UpdateActivityImageDto) {
    return this.activityImageService.update(+id, updateActivityImageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.activityImageService.remove(+id);
  }
}
