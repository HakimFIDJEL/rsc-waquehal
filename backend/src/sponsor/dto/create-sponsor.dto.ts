import { IsBoolean, IsString, IsOptional } from 'class-validator';

export class CreateSponsorDto {
  @IsBoolean()
  status: boolean;

  @IsString()
  name: string;

  @IsString()
  image: string;

  @IsOptional()
  @IsString()
  website?: string;
}