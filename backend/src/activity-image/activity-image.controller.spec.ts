import { Test, TestingModule } from '@nestjs/testing';
import { ActivityImageController } from './activity-image.controller';
import { ActivityImageService } from './activity-image.service';

describe('ActivityImageController', () => {
  let controller: ActivityImageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActivityImageController],
      providers: [ActivityImageService],
    }).compile();

    controller = module.get<ActivityImageController>(ActivityImageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
