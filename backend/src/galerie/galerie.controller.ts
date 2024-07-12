import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GalerieService } from './galerie.service';
import { CreateGalerieDto } from './dto/create-galerie.dto';
import { UpdateGalerieDto } from './dto/update-galerie.dto';

@Controller('galerie')
export class GalerieController {
  constructor(private readonly galerieService: GalerieService) {}

  @Post()
  create(@Body() createGalerieDto: CreateGalerieDto) {
    return this.galerieService.create(createGalerieDto);
  }

  @Get()
  findAll() {
    return this.galerieService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.galerieService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGalerieDto: UpdateGalerieDto) {
    return this.galerieService.update(+id, updateGalerieDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.galerieService.remove(+id);
  }
}
