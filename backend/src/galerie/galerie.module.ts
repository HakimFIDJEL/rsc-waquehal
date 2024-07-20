import { Module } from '@nestjs/common';
import { GalerieService } from './galerie.service';
import { GalerieController } from './galerie.controller';
import { PrismaService } from '../prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [GalerieController],
  providers: [GalerieService, PrismaService, JwtService],
})
export class GalerieModule {}
