const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(bodyParser.json());
app.use(cors());
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

app.get('/api/questions', (req, res) => {
  res.json(questions);
});

app.post('/api/submit', (req, res) => {
  const userAnswers = req.body;
  let score = 0;

  questions.forEach((question) => {
    if (userAnswers[question.id] === question.correctAnswer) {
      score++;
    }
  });

  res.json({ score });
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
