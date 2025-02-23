import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { QnaService } from './qna.service';
import { CreateQnaDto } from './dto/create-qna.dto';
import { UpdateQnaDto } from './dto/update-qna.dto';

@Controller('qna')
export class QnaController {
  constructor(private readonly qnaService: QnaService) {}

  @Post('question')
  create(@Body() createQnaDto: CreateQnaDto) {
    return this.qnaService.create(createQnaDto);
  }

  @Patch('question/:id')
  update(@Param('id') id: number, @Body() updateQnaDto, UpdateQnaDto) {
    return this.qnaService.update(id, updateQnaDto);
  }
}
