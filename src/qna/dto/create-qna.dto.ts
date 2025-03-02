import { IsNotEmpty, IsString } from 'class-validator';

export class CreateQnaDto {
  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  content: string;
}
