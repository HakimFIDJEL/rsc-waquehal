import { Module } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { UserService } from 'src/user/user.service';
import { EmailService } from './email.service';

@Module({})
export class EmailModule {
    providers: [EmailService, AuthService, UserService]
}
