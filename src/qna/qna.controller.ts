import { Controller, Post, Body, Patch, Param, Get } from '@nestjs/common';
import { QnaService } from './qna.service';
import { CreateQnaDto } from './dto/create-qna.dto';
import { CreateOrUpdateAnswerDto } from './dto/answer-create-update.dto';

@Controller('qna')
export class QnaController {
  constructor(private readonly qnaService: QnaService) {}

  @Get()
  findAll() {
    return this.qnaService.findAllQuestions();
  }

  @Get('answer/:id')
  findOne(@Param('id') id: number) {
    return this.qnaService.findOneQuestion(id);
  }

  @Post('question')
  create(@Body() createQnaDto: CreateQnaDto) {
    return this.qnaService.create(createQnaDto);
  }

  @Patch('question/:id')
  update(@Param('id') id: number, @Body() updateQnaDto) {
    return this.qnaService.update(id, updateQnaDto);
  }

  @Patch('answer/:id')
  createAndUpdateAnser(
    @Body() createOrUpdateAnswerDto: CreateOrUpdateAnswerDto,
  ) {
    return this.qnaService.createOrUpdateAnswer(createOrUpdateAnswerDto);
  }
}
