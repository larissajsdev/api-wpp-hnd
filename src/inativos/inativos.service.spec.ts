import { Test, TestingModule } from '@nestjs/testing';
import { InativosService } from './inativos.service';

describe('InativosService', () => {
  let service: InativosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InativosService],
    }).compile();

    service = module.get<InativosService>(InativosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
