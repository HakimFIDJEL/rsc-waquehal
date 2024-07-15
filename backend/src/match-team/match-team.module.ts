import { Module } from '@nestjs/common';
import { MatchTeamService } from './match-team.service';
import { MatchTeamController } from './match-team.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [MatchTeamController],
  providers: [MatchTeamService, PrismaService],
})
export class MatchTeamModule {}
