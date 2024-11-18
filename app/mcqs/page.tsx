"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Brain, Trophy, Clock, BookOpen, CheckCircle, XCircle } from "lucide-react";

const subjects = {
  physics: [
    {
      id: 1,
      question: "Which of the following is a vector quantity?",
      options: ["Mass", "Speed", "Velocity", "Temperature"],
      correctAnswer: 2,
      explanation: "Velocity is a vector quantity as it has both magnitude and direction."
    },
    {
      id: 2,
      question: "What is the SI unit of force?",
      options: ["Joule", "Newton", "Pascal", "Watt"],
      correctAnswer: 1,
      explanation: "The SI unit of force is Newton (N)."
    }
  ],
  chemistry: [
    {
      id: 1,
      question: "What is the atomic number of Carbon?",
      options: ["5", "6", "7", "8"],
      correctAnswer: 1,
      explanation: "Carbon has 6 protons, making its atomic number 6."
    }
  ],
  mathematics: [
    {
      id: 1,
      question: "What is the derivative of e^x?",
      options: ["e^x", "xe^x", "e^(x-1)", "1/e^x"],
      correctAnswer: 0,
      explanation: "The derivative of e^x is e^x."
    }
  ]
};

export default function MCQsPage() {
  const [activeSubject, setActiveSubject] = useState("physics");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState({ physics: 0, chemistry: 0, mathematics: 0 });
  const [attempted, setAttempted] = useState({ physics: [], chemistry: [], mathematics: [] });

  const handleAnswer = (answerIndex) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(answerIndex);
    const isCorrect = answerIndex === subjects[activeSubject][currentQuestion].correctAnswer;
    
    if (isCorrect) {
      setScore({ ...score, [activeSubject]: score[activeSubject] + 1 });
    }
    
    setAttempted({
      ...attempted,
      [activeSubject]: [...attempted[activeSubject], currentQuestion]
    });
    
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    if (currentQuestion < subjects[activeSubject].length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentQuestion(0);
    }
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold">Practice MCQs</h1>
        <Card className="p-4 flex items-center space-x-4">
          <Trophy className="w-5 h-5 text-primary" />
          <div>
            <p className="text-sm text-muted-foreground">Total Score</p>
            <p className="text-xl font-bold">{score[activeSubject]}</p>
          </div>
        </Card>
      </div>

      <Tabs value={activeSubject} onValueChange={setActiveSubject} className="space-y-8">
        <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
          <TabsTrigger value="physics">Physics</TabsTrigger>
          <TabsTrigger value="chemistry">Chemistry</TabsTrigger>
          <TabsTrigger value="mathematics">Mathematics</TabsTrigger>
        </TabsList>

        <TabsContent value={activeSubject}>
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5" />
                <span className="font-medium">Question {currentQuestion + 1} of {subjects[activeSubject].length}</span>
              </div>
              <Clock className="w-5 h-5 text-muted-foreground" />
            </div>

            <Progress 
              value={(currentQuestion / subjects[activeSubject].length) * 100} 
              className="mb-8"
            />

            <motion.div
              key={`${activeSubject}-${currentQuestion}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h2 className="text-xl font-semibold">
                {subjects[activeSubject][currentQuestion].question}
              </h2>

              <div className="grid gap-4">
                {subjects[activeSubject][currentQuestion].options.map((option, index) => (
                  <Button
                    key={index}
                    variant={selectedAnswer === null ? "outline" : 
                      index === subjects[activeSubject][currentQuestion].correctAnswer ? "default" :
                      selectedAnswer === index ? "destructive" : "outline"}
                    className="justify-start h-auto py-4 px-6"
                    onClick={() => handleAnswer(index)}
                    disabled={selectedAnswer !== null}
                  >
                    <span className="mr-2">{String.fromCharCode(65 + index)}.</span>
                    {option}
                    {selectedAnswer !== null && index === subjects[activeSubject][currentQuestion].correctAnswer && (
                      <CheckCircle className="w-5 h-5 ml-auto text-green-500" />
                    )}
                    {selectedAnswer === index && index !== subjects[activeSubject][currentQuestion].correctAnswer && (
                      <XCircle className="w-5 h-5 ml-auto text-red-500" />
                    )}
                  </Button>
                ))}
              </div>

              {showExplanation && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-6 p-4 bg-muted rounded-lg"
                >
                  <p className="font-medium">Explanation:</p>
                  <p className="text-muted-foreground">
                    {subjects[activeSubject][currentQuestion].explanation}
                  </p>
                </motion.div>
              )}

              {selectedAnswer !== null && (
                <Button className="w-full" onClick={nextQuestion}>
                  Next Question
                </Button>
              )}
            </motion.div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}