import { Injectable } from '@nestjs/common';
import { CreateGalerieDto } from './dto/create-galerie.dto';
import { UpdateGalerieDto } from './dto/update-galerie.dto';

@Injectable()
export class GalerieService {
  create(createGalerieDto: CreateGalerieDto) {
    return 'This action adds a new galerie';
  }

  findAll() {
    return `This action returns all galerie`;
  }

  findOne(id: number) {
    return `This action returns a #${id} galerie`;
  }

  update(id: number, updateGalerieDto: UpdateGalerieDto) {
    return `This action updates a #${id} galerie`;
  }

  remove(id: number) {
    return `This action removes a #${id} galerie`;
  }
}
