import { Test, TestingModule } from '@nestjs/testing';
import { PalmaresService } from './palmares.service';

describe('PalmaresService', () => {
  let service: PalmaresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PalmaresService],
    }).compile();

    service = module.get<PalmaresService>(PalmaresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
