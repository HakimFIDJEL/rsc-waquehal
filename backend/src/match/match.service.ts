import { Injectable } from '@nestjs/common';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class MatchService {

  constructor(
    private prisma: PrismaService,
  ){}

  async findAll() 
  {
    return await this.prisma.match.findMany();
  }

  async create(createMatchDto: CreateMatchDto) 
  {

  }


  findOne(id: number) {
    return `This action returns a #${id} match`;
  }

  update(id: number, updateMatchDto: UpdateMatchDto) {
    return `This action updates a #${id} match`;
  }

  remove(id: number) {
    return `This action removes a #${id} match`;
  }
}
