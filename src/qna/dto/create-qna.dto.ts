import { IsNotEmpty, IsString } from 'class-validator';

export class CreateQnaDto {
  @IsNotEmpty()
  @IsString()
  content: string;
}
