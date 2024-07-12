import { IsBoolean, IsInt, IsString } from 'class-validator';

export class CreatePalmaresDto {
  @IsBoolean()
  status: boolean;

  @IsInt()
  ranking: number;

  @IsString()
  season: string;

  @IsString()
  title: string;

  @IsString()
  category: string;
}