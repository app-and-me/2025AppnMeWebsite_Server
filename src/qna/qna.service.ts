import {
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateQnaDto } from './dto/create-qna.dto';
import { UpdateQnaDto } from './dto/update-qna.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Qna } from './entities/qna.entity';
import { Repository } from 'typeorm';
import { NotFoundError } from 'rxjs';

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

  async update(id: number, updateQnaDto: UpdateQnaDto) {
    try {
      const question = await this.qnaRepository.findOneBy({ id });
      if (!question) {
        throw new NotFoundException('Question not found.');
      }

      if (question.password != updateQnaDto.password) {
        throw new UnauthorizedException('Password does not match.');
      }

      await this.qnaRepository.update(id, updateQnaDto);

      const newQuestion = await this.qnaRepository.findOneBy({ id });

      return {
        status: HttpStatus.OK,
        message: 'Question updated successfully',
        data: newQuestion,
      };
    } catch (e) {
      if (
        e instanceof NotFoundException ||
        e instanceof UnauthorizedException
      ) {
        throw e;
      }
      throw new InternalServerErrorException('Failed to update question.');
    }
  }
}
