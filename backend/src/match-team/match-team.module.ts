import { Module } from '@nestjs/common';
import { MatchTeamService } from './match-team.service';
import { MatchTeamController } from './match-team.controller';
import { PrismaService } from '../prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [MatchTeamController],
  providers: [MatchTeamService, PrismaService, JwtService],
})
export class MatchTeamModule {}
