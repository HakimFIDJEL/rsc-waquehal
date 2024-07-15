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
  findAll() {
    return this.newsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.newsService.findOne(+id);
  }

  @UseGuards(JwtGuard)
  @Post()
  create(@Body() createNewsDto: CreateNewsDto) {
    return this.newsService.create(createNewsDto);
  }

  @UseGuards(JwtGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNewsDto: UpdateNewsDto) {
    return this.newsService.update(+id, updateNewsDto);
  }

  @UseGuards(JwtGuard)
  @Post('upload/:id')
  @UseInterceptors(AnyFilesInterceptor())
  upload(@Param('id') id: string, @UploadedFiles() files: Express.Multer.File[]) {
    return this.newsService.upload(+id, files);
  }

  @UseGuards(JwtGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.newsService.remove(+id);
  }

  


  

  

  
}
