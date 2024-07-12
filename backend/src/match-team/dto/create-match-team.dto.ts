import { IsBoolean, IsInt, IsString, IsArray, IsOptional } from 'class-validator';

export class CreateMatchTeamDto {
  @IsBoolean()
  status: boolean;

  @IsInt()
  categoryId: number;

  @IsString()
  image: string;

  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  playerIds?: number[];
}