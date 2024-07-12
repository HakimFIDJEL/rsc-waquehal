import { Injectable } from '@nestjs/common';
import { CreateActivityImageDto } from './dto/create-activity-image.dto';
import { UpdateActivityImageDto } from './dto/update-activity-image.dto';

@Injectable()
export class ActivityImageService {
  create(createActivityImageDto: CreateActivityImageDto) {
    return 'This action adds a new activityImage';
  }

  findAll() {
    return `This action returns all activityImage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} activityImage`;
  }

  update(id: number, updateActivityImageDto: UpdateActivityImageDto) {
    return `This action updates a #${id} activityImage`;
  }

  remove(id: number) {
    return `This action removes a #${id} activityImage`;
  }
}
