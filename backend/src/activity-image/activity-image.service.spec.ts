import { Test, TestingModule } from '@nestjs/testing';
import { ActivityImageService } from './activity-image.service';

describe('ActivityImageService', () => {
  let service: ActivityImageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActivityImageService],
    }).compile();

    service = module.get<ActivityImageService>(ActivityImageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
