import { Test, TestingModule } from '@nestjs/testing';
import { GalerieController } from './galerie.controller';
import { GalerieService } from './galerie.service';

describe('GalerieController', () => {
  let controller: GalerieController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GalerieController],
      providers: [GalerieService],
    }).compile();

    controller = module.get<GalerieController>(GalerieController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
