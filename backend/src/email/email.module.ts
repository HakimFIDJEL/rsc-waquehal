import { Module } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { UserService } from '../user/user.service';
import { EmailService } from './email.service';

@Module({})
export class EmailModule {
    providers: [EmailService, AuthService, UserService]
}
