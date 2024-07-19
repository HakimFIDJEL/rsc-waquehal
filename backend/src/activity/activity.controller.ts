import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { JwtGuard } from '../auth/guards/jwt.guard';
import { AnyFilesInterceptor } from '@nestjs/platform-express';

@Controller('activity')
export class ActivityController {
  constructor(private readonly activityService: ActivityService) {}

  

  @Get()
  async findAll() {
    return this.activityService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.activityService.findOne(+id);
  }

  @UseGuards(JwtGuard)
  @Post()
  async create(@Body() createActivityDto: CreateActivityDto) {
    return this.activityService.create(createActivityDto);
  }

  @UseGuards(JwtGuard)
  @Post('upload/:id')
  @UseInterceptors(AnyFilesInterceptor())
  async upload(@Param('id') id: string, @UploadedFiles() files: Express.Multer.File[]) {
    return this.activityService.upload(+id, files);
  }

  @UseGuards(JwtGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateActivityDto: UpdateActivityDto) {
    return this.activityService.update(+id, updateActivityDto);
  }

  @UseGuards(JwtGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.activityService.remove(+id);
  }
}
