import { IsString, IsBoolean, IsInt } from 'class-validator';

export class CreateMatchPlayerDto {
  @IsString()
  name: string;

  @IsBoolean()
  captain: boolean;

  @IsInt()
  teamId: number;
}