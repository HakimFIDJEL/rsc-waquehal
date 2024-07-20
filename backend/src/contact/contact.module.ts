import { Module } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactController } from './contact.controller';
import { PrismaService } from '../prisma.service';
import { JwtService } from '@nestjs/jwt';
import { EmailService } from '../email/email.service';

@Module({
  controllers: [ContactController],
  providers: [ContactService, PrismaService, JwtService, EmailService],
})
export class ContactModule {}
