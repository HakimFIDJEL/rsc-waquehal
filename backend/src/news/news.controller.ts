import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFiles, UseGuards } from '@nestjs/common';
import { NewsService } from './news.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { JwtGuard } from '../auth/guards/jwt.guard';


@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}


  @Get()
  async findAll() {
    return this.newsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.newsService.findOne(+id);
  }

  @Post()
  @UseGuards(JwtGuard)
  async create(@Body() createNewsDto: CreateNewsDto) {
    return this.newsService.create(createNewsDto);
  }

  @Patch(':id')
  @UseGuards(JwtGuard)
  async update(@Param('id') id: string, @Body() updateNewsDto: UpdateNewsDto) {
    return this.newsService.update(+id, updateNewsDto);
  }

  @Post('upload/:id')
  @UseGuards(JwtGuard)
  @UseInterceptors(AnyFilesInterceptor())
  async upload(@Param('id') id: string, @UploadedFiles() files: Express.Multer.File[]) {
    return this.newsService.upload(+id, files);
  }

  @Delete(':id')
  @UseGuards(JwtGuard)
  async remove(@Param('id') id: string) {
    return this.newsService.remove(+id);
  }
}
