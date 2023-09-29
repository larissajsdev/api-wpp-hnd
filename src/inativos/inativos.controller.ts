import {
  Controller,
  Get,
  Post,
  // Body,
  // Patch,
  Param,
  Delete,
  UploadedFile,
  UseInterceptors,
  Body,
} from '@nestjs/common';
import { InativosService } from './inativos.service';
// import { CreateInativoDto } from './dto/create-inativo.dto';
// import { UpdateInativoDto } from './dto/update-inativo.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('inativos')
export class InativosController {
  constructor(private readonly inativosService: InativosService) {}

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          cb(null, `${file.originalname}`);
        },
      }),
    }),
  )
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Body('message') message: string,
    @Body('message_interval_seconds') messageIntervalSeconds: string,
  ) {
    return await this.inativosService.upload(
      file,
      message,
      messageIntervalSeconds,
    );
  }

  // @Post()
  // create(@Body() createInativoDto: CreateInativoDto) {
  //   return this.inativosService.create(createInativoDto);
  // }

  @Get()
  findAll() {
    return this.inativosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.inativosService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateInativoDto: UpdateInativoDto) {
  //   return this.inativosService.update(+id, updateInativoDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inativosService.remove(+id);
  }
}
