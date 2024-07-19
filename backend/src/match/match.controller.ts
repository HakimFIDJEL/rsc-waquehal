import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { MatchService } from './match.service';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';
import { JwtGuard } from '../auth/guards/jwt.guard';

@Controller('match')
export class MatchController {
  constructor(
    private readonly matchService: MatchService,
  ) {}

  @Get()
  findAll() {
    return this.matchService.findAll();
  }

  @Get('team')
  @UseGuards(JwtGuard)
  async findTeamMatches() {
    return this.matchService.findTeamMatches();
  }

  

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.matchService.findOne(+id);
  }

  
  @Post()
  @UseGuards(JwtGuard)
  async create(@Body() createMatchDto: CreateMatchDto) {
    return this.matchService.create(createMatchDto);
  }


  @Patch(':id')
  @UseGuards(JwtGuard)
  async update(@Param('id') id: string, @Body() updateMatchDto: UpdateMatchDto) {
    return this.matchService.update(+id, updateMatchDto);
  }

  @Delete(':id')
  @UseGuards(JwtGuard)
  async remove(@Param('id') id: string) {
    return this.matchService.remove(+id);
  }
}
