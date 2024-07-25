import { Injectable } from '@nestjs/common';
import { CreateMatchTeamDto } from './dto/create-match-team.dto';
import { UpdateMatchTeamDto } from './dto/update-match-team.dto';
import { PrismaService } from '../prisma.service';
import { CreateMatchPlayerDto } from '../match-player/dto/create-match-player.dto';
import { ConflictException } from '@nestjs/common';
import { join } from 'path';
import { promises as fs } from 'fs';

@Injectable()
export class MatchTeamService {

  constructor(
    private prisma: PrismaService,
  ){}

  // Création d'une équipe - Fait
  async create(createMatchTeamDto: CreateMatchTeamDto,  createMatchPlayerDto: CreateMatchPlayerDto[]) {

    const category = await this.prisma.matchCategory.findUnique({
      where: { id: createMatchTeamDto.categoryId }
    });

    const team = await this.prisma.matchTeam.findFirst({
      where: {
        categoryId: createMatchTeamDto.categoryId
      }
    });

    if (team) {
      throw new ConflictException('Une équipe existe déjà pour cette catégorie');
    }
  
    const matchTeam = await this.prisma.matchTeam.create({
      data: createMatchTeamDto
    });

    for (const player of createMatchPlayerDto) { 
      await this.prisma.matchPlayer.create({
        data: {
          ...player,
          teamId: matchTeam.id
        }
      });
    }
    return matchTeam;
  }

  // Upload d'une image - Fait
  async upload(id: number, file: Express.Multer.File) {
    if (!file) {
      await this.remove(id);
      throw new ConflictException('Aucun fichier n\'a été uploadé');
    }

    const matchTeam = await this.prisma.matchTeam.findUnique({
      where: { id }
    });

    if (!matchTeam) {
      throw new ConflictException('L\'équipe n\'existe pas');
    }

    const uploadDir = join(__dirname, '..', '..', 'uploads');
    await fs.mkdir(uploadDir, { recursive: true });

    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const fileExtension = file.originalname.split('.').pop();
    const filename = `${uniqueSuffix}.${fileExtension}`;
    const filePath = join(uploadDir, filename);

    if (!file.buffer) {
      await this.remove(id);
      throw new ConflictException('Le contenu du fichier est manquant');
    }

    await fs.writeFile(filePath, file.buffer);

    return this.prisma.matchTeam.update({
      where: { id },
      data: {
        image: `/uploads/${filename}`
      }
    });
  }

  // Retournes toutes les équipes - Fait
  async findAll() 
  {
    return this.prisma.matchTeam.findMany({
      include: {
        category: {
          select: {
            name: true
          }
        },
        players: true
      }
    });
  }

  // Retournes une équipe - Fait
  async findOne(id: number)
  {
    return this.prisma.matchTeam.findUnique({
      where: { id },
      include: {
        category: {
          select: {
            name: true
          }
        },
        players: true
      }
    });
  }

  // Mise à jour d'une équipe - Fait
  async update(id: number, updateMatchTeamDto: UpdateMatchTeamDto, createMatchPlayerDto: CreateMatchPlayerDto[]) 
  {
    const category = await this.prisma.matchCategory.findUnique({
      where: { id: updateMatchTeamDto.categoryId }
    });

    const team = await this.prisma.matchTeam.findFirst({
      where: {
        categoryId: updateMatchTeamDto.categoryId
      }
    });

    if (team) {
      throw new ConflictException('Une équipe existe déjà pour cette catégorie');
    }


    const matchTeam = await this.prisma.matchTeam.findUnique({
      where: { id }
    });

    // On supprime l'image si elle existe
    const filePath = join(__dirname, '..', '..', 'uploads', matchTeam?.image?.split('/').pop());
    if(await fs.stat(filePath).then(() => true).catch(() => false)) {
      await fs.unlink(filePath);
    }

    // On vide le champ image
    updateMatchTeamDto.image = "";


    // update team
    await this.prisma.matchTeam.update({
      where: { id },
      data: {
        status: updateMatchTeamDto.status,
        image: updateMatchTeamDto.image,
        category: {
          connect: { id: updateMatchTeamDto.categoryId }
        }
      }
    });

    // remove all players
    await this.prisma.matchPlayer.deleteMany({
      where: { teamId: id }
    });

    // add new players
    for (const player of createMatchPlayerDto) {
      await this.prisma.matchPlayer.create({
        data: {
          ...player,
          teamId: id
        }
      });
    }

    // return updated team
    return this.prisma.matchTeam.findUnique({
      where: { id },
      include: {
        category: {
          select: {
            name: true
          }
        },
        players: true
      }
    });
  }

  // Suppression d'une équipe - Fait
  async remove(id: number) {
    // remove all players
    await this.prisma.matchPlayer.deleteMany({
      where: { teamId: id }
    });

    // delete team image
    const matchTeam = await this.prisma.matchTeam.findUnique({
      where: { id }
    });

    if (matchTeam?.image) {
      const filePath = join(__dirname, '..', '..', 'uploads', matchTeam.image.split('/').pop());

      // if the file exists, delete it
      if (await fs.stat(filePath).then(() => true).catch(() => false)) {
        await fs.unlink(filePath);
      }

    }

    // remove team
    return this.prisma.matchTeam.delete({
      where: { id }
    });

    
  }
}
