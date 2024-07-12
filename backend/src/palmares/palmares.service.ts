import { Injectable } from '@nestjs/common';
import { CreatePalmaresDto } from './dto/create-palmare.dto';
import { UpdatePalmaresDto } from './dto/update-palmare.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PalmaresService {

  constructor(
    private prisma: PrismaService,
  ){}

  async create(createPalmareDto: CreatePalmaresDto) {
    return await this.prisma.palmares.create({
      data: createPalmareDto
    });

  }

  async findAll() {
    return await this.prisma.palmares.findMany();
  }

  async remove(id: number) {
    return await this.prisma.palmares.delete({
      where: {
        id: id
      }
    });
  }

  async findOne(id: number) {
    return await this.prisma.palmares.findUnique({
      where: {
        id: id
      }
    });
  }

  async update(id: number, updatePalmareDto: UpdatePalmaresDto) 
  {
    return await this.prisma.palmares.update({
      where: {
        id: id
      },
      data: updatePalmareDto
    });
  }

}
