import { Injectable } from '@nestjs/common';
import { CreateMatchTeamDto } from './dto/create-match-team.dto';
import { UpdateMatchTeamDto } from './dto/update-match-team.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class MatchTeamService {

  constructor(
    private prisma: PrismaService,
  ){}


  create(createMatchTeamDto: CreateMatchTeamDto) {
    return 'This action adds a new matchTeam';
  }

  async findAll() {
    return await this.prisma.matchTeam.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} matchTeam`;
  }

  update(id: number, updateMatchTeamDto: UpdateMatchTeamDto) {
    return `This action updates a #${id} matchTeam`;
  }

  remove(id: number) {
    return `This action removes a #${id} matchTeam`;
  }
}
