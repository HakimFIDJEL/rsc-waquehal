import { IsString } from 'class-validator';

export class CreateActivityCategoryDto {
    @IsString()
    name: string;
}