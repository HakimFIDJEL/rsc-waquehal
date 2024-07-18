import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { NewsImageService } from './news-image.service';
import { CreateNewsImageDto } from './dto/create-news-image.dto';
import { UpdateNewsImageDto } from './dto/update-news-image.dto';
import { JwtGuard } from 'src/auth/guards/jwt.guard';

@Controller('news-image')
export class NewsImageController {
  constructor(private readonly newsImageService: NewsImageService) {}

  @Post()
  create(@Body() createNewsImageDto: CreateNewsImageDto) {
    return this.newsImageService.create(createNewsImageDto);
  }

  @Get()
  findAll() {
    return this.newsImageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.newsImageService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNewsImageDto: UpdateNewsImageDto) {
    return this.newsImageService.update(+id, updateNewsImageDto);
  }

  @Delete(':id')
  @UseGuards(JwtGuard)
  remove(@Param('id') id: string) {
    return this.newsImageService.remove(+id);
  }
}
