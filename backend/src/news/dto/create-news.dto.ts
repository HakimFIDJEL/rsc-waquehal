import { IsBoolean, IsString, IsOptional, IsArray } from 'class-validator';

export class CreateNewsDto {
  @IsBoolean()
  status: boolean;

  @IsString()
  title: string;

  @IsString()
  content: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  imageUrls?: string[];
}