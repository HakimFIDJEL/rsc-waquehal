import { Test, TestingModule } from '@nestjs/testing';
import { GalerieService } from './galerie.service';

describe('GalerieService', () => {
  let service: GalerieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GalerieService],
    }).compile();

    service = module.get<GalerieService>(GalerieService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
