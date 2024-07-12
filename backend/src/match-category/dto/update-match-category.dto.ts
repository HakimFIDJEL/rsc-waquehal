import { PartialType } from '@nestjs/mapped-types';
import { CreateMatchCategoryDto } from './create-match-category.dto';

export class UpdateMatchCategoryDto extends PartialType(CreateMatchCategoryDto) {}
