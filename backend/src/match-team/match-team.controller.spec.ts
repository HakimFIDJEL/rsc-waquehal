import { Test, TestingModule } from '@nestjs/testing';
import { MatchTeamController } from './match-team.controller';
import { MatchTeamService } from './match-team.service';

describe('MatchTeamController', () => {
  let controller: MatchTeamController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MatchTeamController],
      providers: [MatchTeamService],
    }).compile();

    controller = module.get<MatchTeamController>(MatchTeamController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
