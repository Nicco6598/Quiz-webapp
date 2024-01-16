import React, { useState } from 'react';

interface QuestionProps {
  question: {
    text: string;
    options: string[];
    correctAnswer: string;
  };
  onAnswer: (isCorrect: boolean) => void;
  currentQuestionIndex: number;
  isLastQuestion: boolean;
}

const Question: React.FC<QuestionProps> = ({
  question,
  onAnswer,
  currentQuestionIndex,
  isLastQuestion,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');

  const handleOptionChange = (option: string) => {
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
          <label key={index}>
            <input
              type="radio"
              value={option}
              checked={selectedAnswer === option}
              onChange={() => handleOptionChange(option)}
            />
            {option}
          </label>
        ))}
      </div>
      <button
        className='submit-button'
        onClick={handleSubmit}
        disabled={!selectedAnswer && !isLastQuestion}
      >
        {isLastQuestion ? 'Finish' : 'Next'}
      </button>
    </div>
  );
};

export default Question;
