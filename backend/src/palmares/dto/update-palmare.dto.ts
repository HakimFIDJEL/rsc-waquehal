import { PartialType } from '@nestjs/mapped-types';
import { CreatePalmaresDto } from './create-palmare.dto';

export class UpdatePalmaresDto extends PartialType(CreatePalmaresDto) {}
