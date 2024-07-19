import { IsBoolean, IsInt, IsString, IsDateString } from 'class-validator';

export class CreateMatchDto {
  @IsBoolean()
  status: boolean;

  @IsInt()
  score_ally: number;

  @IsInt()
  score_enemy: number;

  @IsString()
  localisation: string;

  @IsInt()
  categoryId: number;

  @IsString()
  team_enemy: string;

  @IsDateString()
  date: string;
}