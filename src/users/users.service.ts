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
}
