import { Injectable } from '@nestjs/common';
import { CreatePalmaresDto } from './dto/create-palmare.dto';
import { UpdatePalmaresDto } from './dto/update-palmare.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PalmaresService {

  constructor(
    private prisma: PrismaService,
  ){}

  // Création d'un palmares - Fait
  async create(createPalmareDto: CreatePalmaresDto) {
    return await this.prisma.palmares.create({
      data: createPalmareDto
    });
  }

  // Récupération de tous les palmares - Fait
  async findAll() {
    return await this.prisma.palmares.findMany();
  }

  // Suppression d'un palmares - Fait
  async remove(id: number) {
    return await this.prisma.palmares.delete({
      where: {
        id: id
      }
    });
  }

  // Récupération d'un palmares - Fait
  async findOne(id: number) {
    return await this.prisma.palmares.findUnique({
      where: {
        id: id
      }
    });
  }

  // Mise à jour d'un palmares - Fait
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
