import { IsString, IsInt } from 'class-validator';

export class CreateActivityImageDto {
    @IsString()
    url: string;

    @IsInt()
    activityId: number;
}