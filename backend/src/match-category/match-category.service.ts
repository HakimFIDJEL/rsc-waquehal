import { ConflictException, Injectable } from '@nestjs/common';
import { CreateMatchCategoryDto } from './dto/create-match-category.dto';
import { UpdateMatchCategoryDto } from './dto/update-match-category.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class MatchCategoryService {

  constructor(
    private prisma: PrismaService,
  ){}


  // Retourner toutes les catégories de matchs - Fait
  async findAll() {
    return await this.prisma.matchCategory.findMany({
      orderBy: {
        name: 'asc',
      },
    });
  }

  // Créer une nouvelle catégorie de match - Fait
  async create(data: CreateMatchCategoryDto) {

    // the category name must be unique
    const category = await this.prisma.matchCategory.findFirst({
      where: {
        name: data.name,
      },
    });

    if (category) {
      throw new ConflictException('Une catégorie avec ce nom existe déjà');
    }

    return await this.prisma.matchCategory.create({
      data,
    });
  }

  // Mettre à jour une catégorie de match - Fait
  async remove(id: number, teamID: number | null) {
    let teams = [];
    if (teamID !== null) {
      // On récupère dans teams toutes les équipes qui ont le même categoryId que l'argument id mais qui n'ont pas comme id l'argument teamId
      
      teams = await this.prisma.matchTeam.findMany({
        where: {
          categoryId: id,
          id: {
            not: teamID
          }
        },
      });
    } else {
      // Si des équipes sont associées à cette catégorie, on ne peut pas la supprimer
      teams = await this.prisma.matchTeam.findMany({
        where: {
          categoryId: id,
        },
      });
    }

    if (teams.length > 0) {
      throw new ConflictException('Des équipes sont associées à cette catégorie');
    }

    // Si des matchs sont associés à cette catégorie, on ne peut pas la supprimer
    const matches = await this.prisma.match.findMany({
      where: {
        categoryId: id,
      },
    });

    if (matches.length > 0) {
      throw new ConflictException('Des matchs sont associés à cette catégorie');
    }

    return await this.prisma.matchCategory.delete({
      where: { id },
    });
  }

 
}
