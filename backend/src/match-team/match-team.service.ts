import { Injectable } from '@nestjs/common';
import { CreateMatchTeamDto } from './dto/create-match-team.dto';
import { UpdateMatchTeamDto } from './dto/update-match-team.dto';

@Injectable()
export class MatchTeamService {
  create(createMatchTeamDto: CreateMatchTeamDto) {
    return 'This action adds a new matchTeam';
  }

  findAll() {
    return `This action returns all matchTeam`;
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
