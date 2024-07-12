import { Test, TestingModule } from '@nestjs/testing';
import { MatchPlayerController } from './match-player.controller';
import { MatchPlayerService } from './match-player.service';

describe('MatchPlayerController', () => {
  let controller: MatchPlayerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MatchPlayerController],
      providers: [MatchPlayerService],
    }).compile();

    controller = module.get<MatchPlayerController>(MatchPlayerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
