import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsNumber()
  student_number: number;

  @IsString()
  phone_number: string;

  @IsString()
  gender: string;

  @IsString()
  major: string;

  @IsBoolean()
  lived_dormitory: boolean;

  @IsString()
  five_letters: string;

  @IsString()
  motivate: string;
}
