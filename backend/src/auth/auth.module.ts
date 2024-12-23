import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { PrismaService } from '../prisma.service';
import { JwtService } from '@nestjs/jwt';
import { EmailService } from '../email/email.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, UserService, PrismaService, JwtService, EmailService]
})
export class AuthModule {}
