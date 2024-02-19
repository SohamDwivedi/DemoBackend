<?php

namespace App\Http\Controllers;

use App\Models\Quiz;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class QuizController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['index']]);
    }
    public function index()
    {
        $quizzes = Quiz::all();
        return response()->json($quizzes, 200);
    }

    public function create()
    {
        // return view('quizzes.create');
    }

    public function store(Request $request)
    {
        // Validate the request data
        $validatedData = $request->validate([
            'question_text' => 'required',
            'option_a' => 'required',
            'option_b' => 'required',
            'option_c' => 'required',
            'option_d' => 'required',
            'correct_option' => 'required',
        ]);

        // Create a new quiz record
        Quiz::create($validatedData);

        // return redirect()->route('quizzes.index')->with('success', 'Quiz created successfully');
    }

    public function edit(Quiz $quiz)
    {
        // return view('quizzes.edit', ['quiz' => $quiz]);
    }

    public function update(Request $request, Quiz $quiz)
    {
        // Validate the request data
        $validatedData = $request->validate([
            'question_text' => 'required',
            'option_a' => 'required',
            'option_b' => 'required',
            'option_c' => 'required',
            'option_d' => 'required',
            'correct_option' => 'required',
        ]);

        // Update the quiz record
        $quiz->update($validatedData);

        // return redirect()->route('quizzes.index')->with('success', 'Quiz updated successfully');
    }

    public function destroy(Quiz $quiz)
    {
        // Delete the quiz record
        $quiz->delete();

        // return redirect()->route('quizzes.index')->with('success', 'Quiz deleted successfully');
    }
}
