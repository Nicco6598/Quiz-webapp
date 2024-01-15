import React from 'react';

interface QuizIntroProps {
  onStartQuiz: () => void;
}

const QuizIntro: React.FC<QuizIntroProps> = ({ onStartQuiz }) => {
  return (
    <div className="quiz-intro">
      <h1>Benvenuto al quiz di moda sostenibile!</h1>
      <p>Testa le tue conoscenze</p>
      <button onClick={onStartQuiz}>Inizia Quiz</button>
    </div>
  );
};

export default QuizIntro;
