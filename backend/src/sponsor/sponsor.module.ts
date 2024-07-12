import { Module } from '@nestjs/common';
import { SponsorService } from './sponsor.service';
import { SponsorController } from './sponsor.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [SponsorController],
  providers: [SponsorService, PrismaService],
})
export class SponsorModule {}
