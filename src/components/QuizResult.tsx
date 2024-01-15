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
      <h1>Quiz Completato!</h1>
      <p>Punteggio: {score}</p>
      <p>Skill Level: {skillLevel}</p>
      <button onClick={onRestart}>Ritenta quiz</button>
    </div>
  );
};

export default QuizResult;
