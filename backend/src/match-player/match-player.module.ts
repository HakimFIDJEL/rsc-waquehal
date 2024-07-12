import { Module } from '@nestjs/common';
import { MatchPlayerService } from './match-player.service';
import { MatchPlayerController } from './match-player.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [MatchPlayerController],
  providers: [MatchPlayerService, PrismaService],
})
export class MatchPlayerModule {}
