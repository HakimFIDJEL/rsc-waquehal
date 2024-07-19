import { Module } from '@nestjs/common';
import { PalmaresService } from './palmares.service';
import { PalmaresController } from './palmares.controller';
import { PrismaService } from '../prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [PalmaresController],
  providers: [PalmaresService, PrismaService, JwtService],
})
export class PalmaresModule {}
