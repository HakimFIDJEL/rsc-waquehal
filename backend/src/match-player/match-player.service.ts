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

  findAll() {
    return `This action returns all matchPlayer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} matchPlayer`;
  }

  update(id: number, updateMatchPlayerDto: UpdateMatchPlayerDto) {
    return `This action updates a #${id} matchPlayer`;
  }

  remove(id: number) {
    return `This action removes a #${id} matchPlayer`;
  }
}
