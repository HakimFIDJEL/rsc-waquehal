import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { MatchPlayerService } from './match-player.service';
import { CreateMatchPlayerDto } from './dto/create-match-player.dto';
import { UpdateMatchPlayerDto } from './dto/update-match-player.dto';
import { JwtGuard } from '../auth/guards/jwt.guard';

@Controller('match-player')
export class MatchPlayerController {
  constructor(private readonly matchPlayerService: MatchPlayerService) {}

  @Post()
  @UseGuards(JwtGuard)
  create(@Body() createMatchPlayerDto: CreateMatchPlayerDto) {
    return this.matchPlayerService.create(createMatchPlayerDto);
  }

  @Get()
  findAll() {
    return this.matchPlayerService.findAll();
  }

 
}
