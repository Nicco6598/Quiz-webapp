import React, { useState } from 'react';
import QuizIntro from './QuizIntro';
import Question from './Question';
import QuizResult from './QuizResult';
import { questions } from '../data/question';

enum SkillLevel {
  Base = 'base',
  Intermedio = 'intermedio',
  Esperto = 'esperto',
  Maestro = 'maestro',
}

const QuizApp: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  const getSkillLevel = (score: number): SkillLevel => {
    if (score <= 3) {
      return SkillLevel.Base;
    } else if (score <= 7) {
      return SkillLevel.Intermedio;
    } else if (score <= 9) {
      return SkillLevel.Esperto;
    } else {
      return SkillLevel.Maestro;
    }
  };

  return (
    <div className="quiz-app">
      {currentQuestionIndex < questions.length ? (
        <>
          <Question
            question={questions[currentQuestionIndex]}
            onAnswer={handleAnswer}
          />
        </>
      ) : (
        <QuizResult
          score={score}
          skillLevel={getSkillLevel(score)}
          onRestart={resetQuiz}
        />
      )}
    </div>
  );
};

export default QuizApp;
