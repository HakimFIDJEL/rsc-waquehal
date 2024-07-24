import { Injectable } from '@nestjs/common';
import { CreateMatchPlayerDto } from './dto/create-match-player.dto';
import { UpdateMatchPlayerDto } from './dto/update-match-player.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class MatchPlayerService {

  constructor(
    private prisma: PrismaService,
  ){}


  async create(createMatchPlayerDto: CreateMatchPlayerDto) {
    return await this.prisma.matchPlayer.create({
      data: createMatchPlayerDto
    });
  }

  async findAll() {
    return await this.prisma.matchPlayer.findMany();
  }


}
