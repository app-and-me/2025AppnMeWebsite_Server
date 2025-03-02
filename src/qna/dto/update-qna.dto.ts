import { IsOptional, IsString } from 'class-validator';

export class UpdateQnaDto {
  @IsString()
  @IsOptional()
  content: string;

  @IsString()
  @IsOptional()
  password: string;

  @IsString()
  @IsOptional()
  answer: string;
}
