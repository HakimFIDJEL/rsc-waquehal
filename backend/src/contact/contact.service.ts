import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { PrismaService } from '../prisma.service';
import { EmailService } from '../email/email.service';

@Injectable()
export class ContactService {

  constructor (
    private readonly prismaService: PrismaService,
    private readonly emailService: EmailService,
  ) {}

  // Récupérer tous les contacts - Fait
  async findAll() {
    return await this.prismaService.contact.findMany();
  }

  // Créer un contact - Fait
  async create(createContactDto: CreateContactDto) {
    const contact = await this.prismaService.contact.create({
      data: createContactDto
    });
    const users = await this.prismaService.user.findMany();

    for (const user of users) {
      await this.emailService.sendContactEmail(contact.name, contact.email, contact.message, user.email);
    }

    return contact;
  }

  // Supprimer un contact - Fait
  async remove(id: number) {
    return await this.prismaService.contact.delete({
      where: { id }
    });
  }
}
