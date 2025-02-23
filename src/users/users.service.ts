import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as Excel from 'exceljs';
import * as fs from 'fs';

@Injectable()
export class UsersService {
  @InjectRepository(User)
  private userRepository: Repository<User>;

  // TODO : 엑셀에 사용자 정보 저장
  async create(createUserDto: CreateUserDto) {
    try {
      const user = {
        ...createUserDto,
      };

      if (createUserDto.five_letters.length != 5) {
        throw new BadRequestException(
          `${createUserDto.five_letters} must be five letters.`,
        );
      }

      await this.userRepository.save(user);

      const userInfoToArray = Object.entries(user).map(([key, value]) => ({
        key: key,
        value: value,
      }));
      this.userInfoToExcel(userInfoToArray);

      return {
        status: HttpStatus.CREATED,
        message: 'User created successfully',
        data: user,
      };
    } catch (e) {
      if (e instanceof BadRequestException) {
        throw e;
      }
      throw new InternalServerErrorException('Failed to create user');
    }
  }

  async userInfoToExcel(user: Array<any>) {
    const file = 'userInfo.xlsx';
    const workbook = new Excel.Workbook();
    let worksheet;

    if (fs.existsSync(file)) {
      await workbook.xlsx.readFile(file);
      worksheet = workbook.getWorksheet('userInfo');
    }

    if (!worksheet) {
      worksheet = workbook.addWorksheet('userInfo');

      worksheet.columns = [
        { header: 'name', key: 'name', width: 10 },
        { header: 'student_number', key: 'student_number', width: 35 },
        { header: 'phone_number', key: 'phone_number', width: 35 },
        { header: 'gender', key: 'gender', width: 35 },
        { header: 'birth_date', key: 'birth_date', width: 35 },
        { header: 'major', key: 'major', width: 35 },
        { header: 'lived_dormitory', key: 'lived_dormitory', width: 35 },
        { header: 'five_letters', key: 'five_letters', width: 35 },
        { header: 'motivate', key: 'motivate', width: 35 },
        { header: 'id', key: 'id', width: 10 },
        { header: 'created_at', key: 'created_at', width: 35 },
      ];
    }
    const info = user.map((item) => item.value);
    // console.log(info);

    worksheet.addRow(info);
    await workbook.xlsx.writeFile(file);
  }
}
