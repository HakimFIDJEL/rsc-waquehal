import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { NewsImageService } from './news-image.service';
import { CreateNewsImageDto } from './dto/create-news-image.dto';
import { UpdateNewsImageDto } from './dto/update-news-image.dto';
import { JwtGuard } from '../auth/guards/jwt.guard';

@Controller('news-image')
export class NewsImageController {
  constructor(private readonly newsImageService: NewsImageService) {}



  @Delete(':id')
  @UseGuards(JwtGuard)
  remove(@Param('id') id: string) {
    return this.newsImageService.remove(+id);
  }
}
