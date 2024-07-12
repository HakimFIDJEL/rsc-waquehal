import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { CreateUserDto } from 'src/user/dto/create-user.dto';


@Injectable()
export class EmailService {
  constructor(private mailerService: MailerService) {
    

  }

  async sendPasswordResetEmail(user: CreateUserDto, token: string) {
    const url = `${process.env.FRONTEND_URL}/auth/password/reset/${token}`;

    // throw new Error('Test');

    await this.mailerService.sendMail({
      to: user.email,
      subject: 'Réinitialisation de mot de passe',
      template: './password-reset', // Le nom du fichier de template sans l'extension
      context: { 
        name: user.name,
        url,
      },
    });
  }

  async sendWelcomeEmail(user: CreateUserDto, password: string) {
    const url = `${process.env.FRONTEND_URL}/auth/login`;

    
    await this.mailerService.sendMail({
      to: user.email,
      subject: 'Bienvenue sur RSC Wasquehal',
      template: './welcome', 
      context: { 
        name: user.name,
        password,
        url,
      },
    });
  }
}