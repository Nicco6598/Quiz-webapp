// QuizResult.tsx

import React from 'react';

// Definizione del tipo SkillLevel
enum SkillLevel {
  Base = 'base',
  Intermedio = 'intermedio',
  Esperto = 'esperto',
  Maestro = 'maestro',
}

interface QuizResultProps {
  score: number;
  skillLevel: SkillLevel; // Aggiungi il tipo SkillLevel qui
  onRestart: () => void;
}

const QuizResult: React.FC<QuizResultProps> = ({ score, skillLevel, onRestart }) => {
  return (
    <div className="quiz-result">
      <h1>Quiz Completed!</h1>
      <p>Your Score: {score}</p>
      <p>Skill Level: {skillLevel}</p>
      <button onClick={onRestart}>Restart Quiz</button>
    </div>
  );
};

export default QuizResult;
