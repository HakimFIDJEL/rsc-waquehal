import { IsBoolean, IsString } from 'class-validator';

export class CreateGalerieDto {
  @IsBoolean()
  status: boolean;

  @IsString()
  title: string;

  @IsString()
  image: string;
}