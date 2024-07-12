import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MatchPlayerService } from './match-player.service';
import { CreateMatchPlayerDto } from './dto/create-match-player.dto';
import { UpdateMatchPlayerDto } from './dto/update-match-player.dto';

@Controller('match-player')
export class MatchPlayerController {
  constructor(private readonly matchPlayerService: MatchPlayerService) {}

  @Post()
  create(@Body() createMatchPlayerDto: CreateMatchPlayerDto) {
    return this.matchPlayerService.create(createMatchPlayerDto);
  }

  @Get()
  findAll() {
    return this.matchPlayerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.matchPlayerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMatchPlayerDto: UpdateMatchPlayerDto) {
    return this.matchPlayerService.update(+id, updateMatchPlayerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.matchPlayerService.remove(+id);
  }
}
