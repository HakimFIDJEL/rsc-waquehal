import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PalmaresService } from './palmares.service';
import { CreatePalmaresDto } from './dto/create-palmare.dto';
import { UpdatePalmaresDto } from './dto/update-palmare.dto';
import { JwtGuard } from '../auth/guards/jwt.guard';

@Controller('palmares')
export class PalmaresController {
  constructor(private readonly palmaresService: PalmaresService) {}
  
  @Get()
  async findAll() {
    return this.palmaresService.findAll();
  }

  @Post()
  @UseGuards(JwtGuard)
  async create(@Body() createPalmareDto: CreatePalmaresDto) {
    return this.palmaresService.create(createPalmareDto);
  }


  @Get(':id')
  @UseGuards(JwtGuard)
  async findOne(@Param('id') id: string) {
    return this.palmaresService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtGuard)
  async update(@Param('id') id: string, @Body() updatePalmareDto: UpdatePalmaresDto) {
    return this.palmaresService.update(+id, updatePalmareDto);
  }

  @Delete(':id')
  @UseGuards(JwtGuard)
  async remove(@Param('id') id: string) {
    return this.palmaresService.remove(+id);
  }
}
