import { PartialType } from '@nestjs/mapped-types';
import { CreateGalerieDto } from './create-galerie.dto';

export class UpdateGalerieDto extends PartialType(CreateGalerieDto) {}
