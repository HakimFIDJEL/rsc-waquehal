import { Module } from '@nestjs/common';
import { MatchPlayerService } from './match-player.service';
import { MatchPlayerController } from './match-player.controller';
import { PrismaService } from '../prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [MatchPlayerController],
  providers: [MatchPlayerService, PrismaService, JwtService],
})
export class MatchPlayerModule {}
