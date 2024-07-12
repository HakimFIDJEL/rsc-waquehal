import { IsString, IsInt } from 'class-validator';

export class CreateNewsImageDto {
  @IsString()
  url: string;

  @IsInt()
  newsId: number;
}