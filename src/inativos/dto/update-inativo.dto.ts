import { PartialType } from '@nestjs/mapped-types';
import { CreateInativoDto } from './create-inativo.dto';

export class UpdateInativoDto extends PartialType(CreateInativoDto) {}
