import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {} from 'nest-winston';
import { InativosModule } from './inativos/inativos.module';
@Module({
  imports: [ConfigModule.forRoot(), InativosModule],
})
export class AppModule {}
