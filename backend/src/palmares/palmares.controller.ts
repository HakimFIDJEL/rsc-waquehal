import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PalmaresService } from './palmares.service';
import { CreatePalmaresDto } from './dto/create-palmare.dto';
import { UpdatePalmaresDto } from './dto/update-palmare.dto';

@Controller('palmares')
export class PalmaresController {
  constructor(private readonly palmaresService: PalmaresService) {}

  @Post()
  create(@Body() createPalmareDto: CreatePalmaresDto) {
    return this.palmaresService.create(createPalmareDto);
  }

  @Get()
  findAll() {
    return this.palmaresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.palmaresService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePalmareDto: UpdatePalmaresDto) {
    return this.palmaresService.update(+id, updatePalmareDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.palmaresService.remove(+id);
  }
}
