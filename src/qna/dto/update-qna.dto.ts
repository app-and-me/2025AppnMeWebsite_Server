import { IsOptional, IsString } from 'class-validator';

export class UpdateQnaDto {
  @IsString()
  @IsOptional()
  answer: string;
}
