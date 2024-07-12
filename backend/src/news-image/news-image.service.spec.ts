import { Test, TestingModule } from '@nestjs/testing';
import { NewsImageService } from './news-image.service';

describe('NewsImageService', () => {
  let service: NewsImageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NewsImageService],
    }).compile();

    service = module.get<NewsImageService>(NewsImageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
