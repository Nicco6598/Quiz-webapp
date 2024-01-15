import React, { useState } from 'react';

interface QuestionProps {
  question: {
    text: string;
    options: string[];
    correctAnswer: string;
  };
  onAnswer: (isCorrect: boolean) => void;
}

const Question: React.FC<QuestionProps> = ({ question, onAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');

  const handleOptionClick = (option: string) => {
    setSelectedAnswer(option);
  };

  const handleSubmit = () => {
    onAnswer(selectedAnswer === question.correctAnswer);
    setSelectedAnswer('');
  };

  return (
    <div className="question">
      <h2>{question.text}</h2>
      <div className="options">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(option)}
            className={selectedAnswer === option ? 'selected' : ''}
          >
            {option}
          </button>
        ))}
      </div>
      <button className="submit-button" onClick={handleSubmit} disabled={!selectedAnswer}>
        Conferma
      </button>
    </div>
  );
};

export default Question;
