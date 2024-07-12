import { IsBoolean, IsString, IsOptional, IsInt } from 'class-validator';

export class CreateActivityDto {
    @IsBoolean()
    status: boolean;

    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsOptional()
    @IsString()
    website?: string;

    @IsInt()
    categoryId: number;

}