import { PartialType } from '@nestjs/mapped-types';
import { CreateQnaDto } from './create-qna.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateQnaDto extends PartialType(CreateQnaDto) {
  @IsString()
  @IsOptional()
  title: string;

  @IsString()
  @IsOptional()
  content: string;

  @IsString()
  @IsOptional()
  answer: string;
}
