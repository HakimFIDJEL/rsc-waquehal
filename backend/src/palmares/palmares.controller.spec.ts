import { Test, TestingModule } from '@nestjs/testing';
import { PalmaresController } from './palmares.controller';
import { PalmaresService } from './palmares.service';

describe('PalmaresController', () => {
  let controller: PalmaresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PalmaresController],
      providers: [PalmaresService],
    }).compile();

    controller = module.get<PalmaresController>(PalmaresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
