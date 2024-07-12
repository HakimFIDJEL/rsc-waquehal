import { Test, TestingModule } from '@nestjs/testing';
import { NewsImageController } from './news-image.controller';
import { NewsImageService } from './news-image.service';

describe('NewsImageController', () => {
  let controller: NewsImageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NewsImageController],
      providers: [NewsImageService],
    }).compile();

    controller = module.get<NewsImageController>(NewsImageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
