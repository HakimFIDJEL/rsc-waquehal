import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UseGuards, UploadedFiles, UploadedFile } from '@nestjs/common';
import { MatchTeamService } from './match-team.service';
import { CreateMatchTeamDto } from './dto/create-match-team.dto';
import { CreateMatchPlayerDto } from '../match-player/dto/create-match-player.dto';
import { UpdateMatchTeamDto } from './dto/update-match-team.dto';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { JwtGuard } from '../auth/guards/jwt.guard';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('match-team')
export class MatchTeamController {
  constructor(private readonly matchTeamService: MatchTeamService) {}

  
  @Get()
  findAll() {
    return this.matchTeamService.findAll();
  }


  @UseGuards(JwtGuard)
  @Post()
  create(@Body('team') createMatchTeamDto: CreateMatchTeamDto, @Body('players') createMatchPlayerDto: CreateMatchPlayerDto[])
  {
    return this.matchTeamService.create(createMatchTeamDto, createMatchPlayerDto);
  }

  @UseGuards(JwtGuard)
  @Post('upload/:id')
  @UseInterceptors(FileInterceptor('file'))
  upload(@Param('id') id: string, @UploadedFile() file: Express.Multer.File) 
  {
    return this.matchTeamService.upload(+id, file);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.matchTeamService.remove(+id);
  }



  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.matchTeamService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMatchTeamDto: UpdateMatchTeamDto) {
    return this.matchTeamService.update(+id, updateMatchTeamDto);
  }

  
}
