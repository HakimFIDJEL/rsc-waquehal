import { Injectable } from '@nestjs/common';
import { CreateActivityCategoryDto } from './dto/create-activity-category.dto';
import { UpdateActivityCategoryDto } from './dto/update-activity-category.dto';

@Injectable()
export class ActivityCategoryService {
  create(createActivityCategoryDto: CreateActivityCategoryDto) {
    return 'This action adds a new activityCategory';
  }

  findAll() {
    return `This action returns all activityCategory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} activityCategory`;
  }

  update(id: number, updateActivityCategoryDto: UpdateActivityCategoryDto) {
    return `This action updates a #${id} activityCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} activityCategory`;
  }
}
