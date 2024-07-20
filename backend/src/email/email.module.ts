import { Module } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { UserService } from '../user/user.service';
import { EmailService } from './email.service';
import { JwtService } from '@nestjs/jwt';

@Module({})
export class EmailModule {
    providers: [EmailService, AuthService, UserService, JwtService]
}
