import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseInterceptors, UploadedFile } from '@nestjs/common';
import { GalerieService } from './galerie.service';
import { CreateGalerieDto } from './dto/create-galerie.dto';
import { UpdateGalerieDto } from './dto/update-galerie.dto';
import { JwtGuard } from '../auth/guards/jwt.guard';
import { FileInterceptor } from '@nestjs/platform-express';


@Controller('galerie')
export class GalerieController {
  constructor(private readonly galerieService: GalerieService) {}

  @Get()
  async findAll() {
    return this.galerieService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.galerieService.findOne(+id);
  }

  @Post()
  @UseGuards(JwtGuard)
  async create(@Body() createGalerieDto: CreateGalerieDto) {
    return this.galerieService.create(createGalerieDto);
  }

  @Post('upload/:id')
  @UseGuards(JwtGuard)
  @UseInterceptors(FileInterceptor('file'))
  async upload(@Param('id') id: string, @UploadedFile() file: Express.Multer.File) {
    return this.galerieService.upload(+id, file);
  }

  @Patch(':id')
  @UseGuards(JwtGuard)
  async update(@Param('id') id: string, @Body() updateGalerieDto: UpdateGalerieDto) {
    return this.galerieService.update(+id, updateGalerieDto);
  }

  @Delete(':id')
  @UseGuards(JwtGuard)
  async remove(@Param('id') id: string) {
    return this.galerieService.remove(+id);
  }
}
