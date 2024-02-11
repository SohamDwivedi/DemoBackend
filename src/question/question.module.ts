import { Module } from '@nestjs/common';
import { QuestionController } from './question.controller';
import { QuestionService } from './question.service';
import { Questions } from './entities/question.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Questions])], // Import TypeOrmModule.forFeature() here
    providers: [QuestionService],
    controllers: [QuestionController],
    exports: [QuestionService],
})
export class QuestionModule {}
