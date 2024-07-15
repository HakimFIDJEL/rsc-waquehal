import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma.service';
import { hash, compare } from 'bcrypt';
import { EmailService } from '../email/email.service';

@Injectable()
export class UserService {

  constructor(
    private prisma: PrismaService,
    private emailService: EmailService
  ){}

  

  async findByEmail(email: string) {
    return await this.prisma.user.findUnique({
      where: {
        email: email
      }
    });
  }

  async findById(id: number) {
    return await this.prisma.user.findUnique({
      where: {
        id: id
      }
    });
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  async delete(id: number) {
    return await this.prisma.user.delete({
      where: {
        id
      }
    });
  }

  async create(createUserDto: CreateUserDto) {

    const user = await this.prisma.user.findUnique({
      where: {
        email: createUserDto.email
      }
    });

    if(user) throw new ConflictException('Un utilisateur avec cet email existe déjà');

    
    const newUser = await this.prisma.user.create({
      data: {
        ...createUserDto,
        password : await hash(createUserDto.password, 10),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    });

    // On envoie par email le mot de passe généré
    await this.emailService.sendWelcomeEmail(newUser, createUserDto.password);
    
    const { password, ...result } = newUser;

    return result;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.prisma.user.update({
      where: {
        id
      },
      data: {
        ...updateUserDto,
        updatedAt: new Date()
      }
    });
  }

  async updatePassword(id: number, password: string, newPassword: string, confirmPassword: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        id
      }
    });

    // On vérifie que l'utilisateur existe
    if(!user) throw new ConflictException('Cet utilisateur n\'existe pas');

    // On vérifie que c'est le bon mot de passe
    if(!await compare(password, user.password)) throw new ConflictException('Le mot de passe actuel est incorrect');

    if(newPassword !== confirmPassword) throw new ConflictException('Les mots de passe ne correspondent pas');

    return await this.prisma.user.update({
      where: {
        id
      },
      data: {
        password: await hash(newPassword, 10),
        updatedAt: new Date()
      }
    });
  }

  async checkToken(token: string) {
    // On vérifie que le token est valide
    const user = await this.prisma.user.findUnique({
      where: {
        passwordToken: token
      }
    });
    if(!user) throw new ConflictException('Le token est invalide');
    return user;
  }

  async resetPassword(token: string, newPassword: string, confirmPassword: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        passwordToken: token
      }
    });

    // On vérifie que l'utilisateur existe
    if(!user) throw new ConflictException('Cet utilisateur n\'existe pas');

    if(newPassword !== confirmPassword) throw new ConflictException('Les mots de passe ne correspondent pas');

    return await this.prisma.user.update({
      where: {
        passwordToken: token
      },
      data: {
        password: await hash(newPassword, 10),
        passwordToken: null,
        updatedAt: new Date()
      }
    });
  }


 
}
