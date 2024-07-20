import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { JwtGuard } from '../auth/guards/jwt.guard';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  
  @Get()
  @UseGuards(JwtGuard)
  async findAll() {
    return this.contactService.findAll();
  }
  
  @Post()
  // @UseGuards(JwtGuard)
  async create(@Body() createContactDto: CreateContactDto) {
    return this.contactService.create(createContactDto);
  }

  @Delete(':id')
  @UseGuards(JwtGuard)
  async remove(@Param('id') id: string) {
    return this.contactService.remove(+id);
  }
}
