import { IsNotEmpty, IsString } from 'class-validator';

export class CreateOrUpdateAnswerDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  @IsString()
  answer: string;
}
