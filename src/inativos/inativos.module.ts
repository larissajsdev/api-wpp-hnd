import { Module } from '@nestjs/common';
import { InativosService } from './inativos.service';
import { InativosController } from './inativos.controller';

@Module({
  controllers: [InativosController],
  providers: [InativosService],
})
export class InativosModule {}
