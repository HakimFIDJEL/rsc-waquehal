import { Module } from '@nestjs/common';
import { GalerieService } from './galerie.service';
import { GalerieController } from './galerie.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [GalerieController],
  providers: [GalerieService, PrismaService],
})
export class GalerieModule {}
