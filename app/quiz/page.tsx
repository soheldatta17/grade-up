"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, Timer, Trophy } from "lucide-react";

const quizzes = [
  {
    id: 1,
    question: "What is the SI unit of electric current?",
    options: ["Volt", "Ampere", "Ohm", "Watt"],
    correctAnswer: 1,
    explanation: "The SI unit of electric current is the Ampere (A)."
  },
  {
    id: 2,
    question: "Which of the following is a noble gas?",
    options: ["Chlorine", "Neon", "Nitrogen", "Oxygen"],
    correctAnswer: 1,
    explanation: "Neon (Ne) is a noble gas, belonging to group 18 of the periodic table."
  },
  {
    id: 3,
    question: "What is the derivative of sin(x)?",
    options: ["cos(x)", "-cos(x)", "tan(x)", "sec(x)"],
    correctAnswer: 0,
    explanation: "The derivative of sin(x) is cos(x)."
  }
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleAnswer = (value) => {
    setSelectedAnswer(value);
    setAnswers({ ...answers, [currentQuestion]: value });
  };

  const handleNext = () => {
    if (selectedAnswer === quizzes[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < quizzes.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswers({});
  };

  return (
    <div className="container mx-auto py-8">
      <Card className="max-w-3xl mx-auto p-8">
        {!showResult ? (
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Physics Quiz</h2>
              <div className="flex items-center space-x-2">
                <Timer className="w-5 h-5" />
                <span>Question {currentQuestion + 1}/{quizzes.length}</span>
              </div>
            </div>

            <Progress
              value={(currentQuestion / quizzes.length) * 100}
              className="mb-8"
            />

            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="mb-8"
            >
              <h3 className="text-xl mb-4">{quizzes[currentQuestion].question}</h3>

              <RadioGroup
                value={selectedAnswer?.toString()}
                onValueChange={(value) => handleAnswer(parseInt(value))}
                className="space-y-4"
              >
                {quizzes[currentQuestion].options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                    <Label htmlFor={`option-${index}`}>{option}</Label>
                  </div>
                ))}
              </RadioGroup>
            </motion.div>

            <Button
              onClick={handleNext}
              disabled={selectedAnswer === null}
              className="w-full"
            >
              {currentQuestion === quizzes.length - 1 ? "Finish Quiz" : "Next Question"}
            </Button>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <Trophy className="w-16 h-16 mx-auto mb-4 text-primary" />
            <h2 className="text-2xl font-bold mb-4">Quiz Complete!</h2>
            <p className="text-xl mb-8">
              You scored {score} out of {quizzes.length}
            </p>

            <div className="space-y-4 mb-8">
              {quizzes.map((quiz, index) => (
                <div key={index} className="flex items-start space-x-2 text-left">
                  {answers[index] === quiz.correctAnswer ? (
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  )}
                  <div>
                    <p className="font-medium">{quiz.question}</p>
                    <p className="text-sm text-muted-foreground">
                      {quiz.explanation}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button onClick={resetQuiz}>Try Again</Button>
          </motion.div>
        )}
      </Card>
    </div>
  );
}