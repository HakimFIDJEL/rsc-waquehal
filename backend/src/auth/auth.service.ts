import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto/auth.dto';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { EmailService } from 'src/email/email.service';
import { ConflictException } from '@nestjs/common';

@Injectable()
export class AuthService {

    constructor(
        private userService: UserService,
        private jwtService: JwtService,
        private emailService: EmailService
    ){}

    async login(loginDto: LoginDto) {
        const user = await this.validateUser(loginDto);
        const payload = { username: user.email, sub: { name: user.name } };
        
        return {
            user,
            backendTokens: {
                accessToken: await this.jwtService.signAsync(payload, 
                {   
                    expiresIn: '5h',
                    secret: process.env.jwtSecretKey,
                }),
                refreshToken: await this.jwtService.signAsync(payload, 
                {   
                    expiresIn: '7d',
                    secret: process.env.jwtRefreshTokenKey,
                }),
            }
        }
    }


    async validateUser(loginDto: LoginDto) {
        const user = await this.userService.findByEmail(loginDto.email);
        
        if(user && (await compare(loginDto.password, user.password)))
        {
            const { password, ...result } = user;
            return result;
        }

        throw new UnauthorizedException();
    }

    async refreshToken(user: any){
        const payload = { username: user.username, sub: user.sub };
        
        return {
            backendTokens: {
                accessToken: await this.jwtService.signAsync(payload, 
                {   
                    expiresIn: '5h',
                    secret: process.env.jwtSecretKey,
                }),
                refreshToken: await this.jwtService.signAsync(payload, 
                {   
                    expiresIn: '7d',
                    secret: process.env.jwtRefreshTokenKey,
                }),
            }
        }
    }

    async forgotPassword(email: string) 
    {

        const user = await this.userService.findByEmail(email);
        if(user)
        {
            // On génère un token aléatoire
            const token = Math.random().toString(36).substr(2, 15);
            // On stocke le token en base de données
            await this.userService.update(user.id, { passwordToken: token });
            // On envoie un email à l'utilisateur avec le token
            await this.emailService.sendPasswordResetEmail(user, token);

            const result = { password: user.password, ...user };
            return result;
        }

        throw new ConflictException('Cet utilisateur n\'existe pas');
    
    }
}
