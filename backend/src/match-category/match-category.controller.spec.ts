import { Test, TestingModule } from '@nestjs/testing';
import { MatchCategoryController } from './match-category.controller';
import { MatchCategoryService } from './match-category.service';

describe('MatchCategoryController', () => {
  let controller: MatchCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MatchCategoryController],
      providers: [MatchCategoryService],
    }).compile();

    controller = module.get<MatchCategoryController>(MatchCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
