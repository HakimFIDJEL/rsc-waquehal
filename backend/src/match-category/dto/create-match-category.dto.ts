import { IsString } from 'class-validator';

export class CreateMatchCategoryDto {
  @IsString()
  name: string;
}