import {
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateQnaDto } from './dto/create-qna.dto';
import { UpdateQnaDto } from './dto/update-qna.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Qna } from './entities/qna.entity';
import { Repository } from 'typeorm';

@Injectable()
export class QnaService {
  @InjectRepository(Qna)
  private qnaRepository: Repository<Qna>;

  async create(createQnaDto: CreateQnaDto) {
    try {
      const question = {
        ...createQnaDto,
      };

      await this.qnaRepository.save(question);
      return {
        status: HttpStatus.CREATED,
        message: 'Question created successfully',
        data: question,
      };
    } catch (e) {
      throw new InternalServerErrorException('Failed to create question');
    }
  }
}
