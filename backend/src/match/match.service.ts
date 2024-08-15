import { Injectable } from '@nestjs/common';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class MatchService {

  constructor(
    private prisma: PrismaService,
  ){}

  // Récupérer tous les matchs - Fait
  async findAll() 
  {
    return await this.prisma.match.findMany({
      include: {
        category: true
      }
    });
  }

  // Créer un match - Fait
  async create(createMatchDto: CreateMatchDto) {
    return await this.prisma.match.create({
      data: {
        status: createMatchDto.status,
        score_ally: createMatchDto.score_ally,
        score_enemy: createMatchDto.score_enemy,
        localisation: createMatchDto.localisation,
        date: new Date(createMatchDto.date),
        team_enemy: createMatchDto.team_enemy,
        category: {
          connect: {
            id: createMatchDto.categoryId
          }
        }
      },
      include: {
        category: true
      }
    });
  }

  // Récupérer les matchs d'une équipe - Fait
  async findTeamMatches() {
    return await this.prisma.match.findMany({
      select: {
        team_enemy: true
      },
      orderBy: {
        team_enemy: 'asc'
      },
      distinct: ['team_enemy']
    });
  }

  // Récupérer un match - Fait
  async findOne(id: number) {
    return await this.prisma.match.findUnique({
      where: {
        id: id
      }
    });
  }

  // Mettre à jour un match - Fait
  async update(id: number, updateMatchDto: UpdateMatchDto) {
    return this.prisma.match.update({
      where: {
        id: id
      },
      data: {
        status: updateMatchDto.status,
        score_ally: updateMatchDto.score_ally,
        score_enemy: updateMatchDto.score_enemy,
        localisation: updateMatchDto.localisation,
        date: new Date(updateMatchDto.date),
        team_enemy: updateMatchDto.team_enemy,
        category: {
          connect: {
            id: updateMatchDto.categoryId
          }
        }
      },
      include: {
        category: true
      }
    });
  }

  // Supprimer un match - Fait
  async remove(id: number) {
    return this.prisma.match.delete({
      where: {
        id: id
      }
    });
  }
}
