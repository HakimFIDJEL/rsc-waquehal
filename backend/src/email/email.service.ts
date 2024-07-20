import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { CreateUserDto } from '../user/dto/create-user.dto';


@Injectable()
export class EmailService {
  constructor(private mailerService: MailerService) {
    

  }

  // Envoi d'un email de contact - Fait
  async sendContactEmail(name: string, email: string, message: string, emailToSend: string) {
    const url = `${process.env.FRONTEND_URL}/admin`;

    await this.mailerService.sendMail({
      to: emailToSend,
      subject: 'RSC Wasquehal - Nouveau message de contact',
      template: './contact', 
      context: { 
        name,
        email,
        message,
        url,
      },
    });
  }

  // Envoi d'un email de réinitialisation de mot de passe - Fait
  async sendPasswordResetEmail(user: CreateUserDto, token: string) {
    const url = `${process.env.FRONTEND_URL}/auth/password/reset/${token}`;

    await this.mailerService.sendMail({
      to: user.email,
      subject: 'RSC Wasquehal - Réinitialisation de mot de passe',
      template: './password-reset', 
      context: { 
        name: user.name,
        url,
      },
    });
  }

  // Envoi d'un email de bienvenue - Fait
  async sendWelcomeEmail(user: CreateUserDto, password: string) {
    const url = `${process.env.FRONTEND_URL}/auth/login`;

    await this.mailerService.sendMail({
      to: user.email,
      subject: 'RSC Wasquehal - Bienvenue sur RSC Wasquehal',
      template: './welcome', 
      context: { 
        name: user.name,
        password,
        url,
      },
    });
  }
}