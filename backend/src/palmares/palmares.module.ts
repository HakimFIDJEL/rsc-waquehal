import { Module } from '@nestjs/common';
import { PalmaresService } from './palmares.service';
import { PalmaresController } from './palmares.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [PalmaresController],
  providers: [PalmaresService, PrismaService],
})
export class PalmaresModule {}
