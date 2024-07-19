import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ActivityImageService } from './activity-image.service';
import { CreateActivityImageDto } from './dto/create-activity-image.dto';
import { UpdateActivityImageDto } from './dto/update-activity-image.dto';
import { JwtGuard } from '../auth/guards/jwt.guard';

@Controller('activity-image')
export class ActivityImageController {
  constructor(private readonly activityImageService: ActivityImageService) {}


  @Delete(':id')
  @UseGuards(JwtGuard)
  async remove(@Param('id') id: string) {
    return this.activityImageService.remove(+id);
  }
}
