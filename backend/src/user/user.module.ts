import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from '../prisma.service';
import { JwtService } from '@nestjs/jwt';
import { EmailService } from '../email/email.service';

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService, JwtService, EmailService],
})
export class UserModule {}
