import { Body, Controller, Get, Post } from '@nestjs/common';
import { QuestionService } from './question.service';

@Controller('question')
export class QuestionController {

    constructor(private readonly questionService: QuestionService){}

    @Get()
    getQuestions(){
        return this.questionService.findAll();
    }

    @Post()
    evaluateResult(@Body() body){
        return this.questionService.checkQuestion(body);
    }

}
