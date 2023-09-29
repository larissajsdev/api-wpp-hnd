import { Test, TestingModule } from '@nestjs/testing';
import { InativosController } from './inativos.controller';
import { InativosService } from './inativos.service';

describe('InativosController', () => {
  let controller: InativosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InativosController],
      providers: [InativosService],
    }).compile();

    controller = module.get<InativosController>(InativosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
