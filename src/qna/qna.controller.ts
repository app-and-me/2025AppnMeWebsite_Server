import {
  Controller,
  Post,
  Body,
  Patch,
  Param,
  Get,
  Delete,
} from '@nestjs/common';
import { QnaService } from './qna.service';
import { CreateQnaDto } from './dto/create-qna.dto';
import { UpdateQnaDto } from './dto/update-qna.dto';

@Controller('api/qna')
export class QnaController {
  constructor(private readonly qnaService: QnaService) {}

  @Get()
  findAll() {
    return this.qnaService.findAllQuestions();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.qnaService.findOneQuestion(id);
  }

  @Post('question')
  create(@Body() createQnaDto: CreateQnaDto) {
    return this.qnaService.create(createQnaDto);
  }

  @Patch('answer/:id')
  createOrUpdateAnswer(@Param('id') id: number, @Body() answer: UpdateQnaDto) {
    return this.qnaService.createOrUpdateAnswer(id, answer);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.qnaService.remove(id);
  }
}
