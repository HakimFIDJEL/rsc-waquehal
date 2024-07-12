import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MatchTeamService } from './match-team.service';
import { CreateMatchTeamDto } from './dto/create-match-team.dto';
import { UpdateMatchTeamDto } from './dto/update-match-team.dto';

@Controller('match-team')
export class MatchTeamController {
  constructor(private readonly matchTeamService: MatchTeamService) {}

  @Post()
  create(@Body() createMatchTeamDto: CreateMatchTeamDto) {
    return this.matchTeamService.create(createMatchTeamDto);
  }

  @Get()
  findAll() {
    return this.matchTeamService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.matchTeamService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMatchTeamDto: UpdateMatchTeamDto) {
    return this.matchTeamService.update(+id, updateMatchTeamDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.matchTeamService.remove(+id);
  }
}
