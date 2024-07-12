import { Test, TestingModule } from '@nestjs/testing';
import { MatchCategoryService } from './match-category.service';

describe('MatchCategoryService', () => {
  let service: MatchCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MatchCategoryService],
    }).compile();

    service = module.get<MatchCategoryService>(MatchCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
