import { Controller, Post, Body, Patch, Param } from '@nestjs/common';
import { QnaService } from './qna.service';
import { CreateQnaDto } from './dto/create-qna.dto';
import { CreateOrUpdateAnswerDto } from './dto/answer-create-update.dto';

@Controller('qna')
export class QnaController {
  constructor(private readonly qnaService: QnaService) {}
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
