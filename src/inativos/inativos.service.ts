import { Injectable } from '@nestjs/common';
// import { CreateInativoDto } from './dto/create-inativo.dto';
// import { UpdateInativoDto } from './dto/update-inativo.dto';
import { convertExcelToJSON } from 'src/utils/upload.utils';
import { sanitizeNumber } from 'src/utils/phone.utils';
import { Inativo } from './entities/inativo.entity';
import { sendTextMessage } from 'src/utils/whatsapp.utils';
import { timer } from 'src/utils/timer.utils';

@Injectable()
export class InativosService {
  async upload(file: Express.Multer.File) {
    const firstSheet = await convertExcelToJSON(file);

    const inativos = firstSheet.map((row: Inativo) => {
      const inativo = { ...row };
      inativo.Celular = sanitizeNumber(row.Celular);
      return inativo;
    });

    for (const inativo of inativos) {
      await timer(5);
      await sendTextMessage(inativo.Celular, 'Olá');
    }

    return inativos;
  }

  // create(createInativoDto: CreateInativoDto) {
  //   return 'This action adds a new inativo';
  // }

  findAll() {
    return `This action returns all inativos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} inativo`;
  }

  // update(id: number, updateInativoDto: UpdateInativoDto) {
  //   return `This action updates a #${id} inativo`;
  // }

  remove(id: number) {
    return `This action removes a #${id} inativo`;
  }
}
