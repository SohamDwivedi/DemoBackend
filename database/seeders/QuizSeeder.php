<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class QuizSeeder extends Seeder
{
    public function run()
    {
        DB::table('quiz')->insert([
            [
                'question_text' => 'What is the capital of France?',
                'option_a' => 'Berlin',
                'option_b' => 'London',
                'option_c' => 'Paris',
                'option_d' => 'Madrid',
                'correct_option' => 'c',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'question_text' => 'What is the largest planet in our solar system?',
                'option_a' => 'Mars',
                'option_b' => 'Earth',
                'option_c' => 'Jupiter',
                'option_d' => 'Saturn',
                'correct_option' => 'c',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'question_text' => 'Who wrote the play "Romeo and Juliet"?',
                'option_a' => 'William Shakespeare',
                'option_b' => 'Charles Dickens',
                'option_c' => 'Mark Twain',
                'option_d' => 'Jane Austen',
                'correct_option' => 'a',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'question_text' => 'What is the symbol for the chemical element oxygen?',
                'option_a' => 'O',
                'option_b' => 'X',
                'option_c' => 'O2',
                'option_d' => 'Ox',
                'correct_option' => 'a',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'question_text' => 'Which planet is known as the "Red Planet"?',
                'option_a' => 'Mars',
                'option_b' => 'Venus',
                'option_c' => 'Mercury',
                'option_d' => 'Jupiter',
                'correct_option' => 'a',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
