import React, { useState } from 'react';

const QuizIntro: React.FC = () => {
  const [quizStarted, setQuizStarted] = useState(false);

  const handleStartQuiz = () => {
    // Qui puoi aggiungere la logica per iniziare il quiz
    setQuizStarted(true);
  };

  return (
    <div className="quiz-intro">
      <h1>Welcome to the Sustainable Fashion Quiz</h1>
      <p>Test your knowledge about sustainable fashion!</p>
      {!quizStarted && (
        <button onClick={handleStartQuiz}>Start Quiz</button>
      )}
    </div>
  );
};

export default QuizIntro;
