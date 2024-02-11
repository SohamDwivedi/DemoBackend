import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Questions } from './entities/question.entity';

@Injectable()
export class QuestionService {
    constructor(
        @InjectRepository(Questions)
        private readonly questionRepository: Repository<Questions>,
    ) {}

    async findAll(): Promise<Questions[]> {
        return this.questionRepository.find({
            select: ['Question_Id', 'Option_A', 'Option_B', 'Option_C', 'Option_D', 'Question_Text']
        });
    }

    async checkQuestion(body:Object): Promise<Object> {
        let c =0;
        let question_ids = Object.keys(body);
        let checkCorrectAns = await this.questionRepository.find({
            where:{
                Question_Id: In(question_ids)
            },
            select: ['Question_Id','Correct_Option']
        });
        let incorrectResult = {}
        Object.keys(checkCorrectAns).forEach((e)=>{
            if(body[checkCorrectAns[e].Question_Id] == checkCorrectAns[e].Correct_Option){
                c++;
            }else{
                incorrectResult[checkCorrectAns[e].Question_Id] = checkCorrectAns[e].Correct_Option;
            }
        })
        return {result:c,incorrectResult:incorrectResult};
    }
}
