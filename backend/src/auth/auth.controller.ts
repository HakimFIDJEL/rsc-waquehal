import { Body, Get, Post, Controller, UseGuards, Req } from '@nestjs/common'; // Ajoutez Req à l'importation
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { LoginDto } from './dto/auth.dto';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { RefreshJwtGuard } from './guards/refresh.guard';
import { Request } from 'express';

@Controller('auth')
export class AuthController {

    constructor(
        private userService: UserService,
        private authService: AuthService
    ){}

    @Post('register')
    async register(@Body() createUserDto: CreateUserDto) {
        return await this.userService.create(createUserDto);
    }

    @Post('login')
    async login(@Body() loginDto: LoginDto) {
        return await this.authService.login(loginDto);
    }

    @UseGuards(RefreshJwtGuard)
    @Post('refresh')
    async refreshToken(@Req() req) {
        return await this.authService.refreshToken(req.user);
    }

    @Post('forgot')
    async forgotPassword(@Body() body: { email: string }) {
        return await this.authService.forgotPassword(body.email);
    }
}