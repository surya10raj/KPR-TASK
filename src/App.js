import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './styles.css'; // Import your CSS file

const questions = [
  {
    id: uuidv4(),
    question: 'What is the capital of France?',
    options: ['London', 'Berlin', 'Paris', 'Madrid'],
    correctAnswer: 'Paris',
  },
  {
    id: uuidv4(),
    question: 'Which planet is known as the Red Planet?',
    options: ['Mars', 'Venus', 'Jupiter', 'Mercury'],
    correctAnswer: 'Mars',
  },
  {
    id: uuidv4(),
    question: 'What is the chemical symbol for water?',
    options: ['H2O', 'CO2', 'O2', 'N2'],
    correctAnswer: 'H2O',
  },
];

const App = () => {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const handleAnswerChange = (questionId, selectedOption) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedOption,
    }));
  };

  const handleSubmit = () => {
    // Calculate the score
    const userScore = questions.reduce((acc, question) => {
      if (answers[question.id] === question.correctAnswer) {
        return acc + 1;
      }
      return acc;
    }, 0);
    setScore(userScore);
  };

  return (
    <div className="quiz-container">
      {questions.map((question) => (
        <div key={question.id} className="question-container">
          <h1>Riddle Quiz </h1>
          <h2>{question.question}</h2>
          <ul>
            {question.options.map((option) => (
              <li key={option}>
                <label>
                  <input
                    type="radio"
                    name={question.id}
                    value={option}
                    onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                    checked={answers[question.id] === option}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
      {score !== null && (
        <div className="result-container">
          <h3>Your Score: {score}</h3>
        </div>
      )}
    </div>
  );
};

export default App;
