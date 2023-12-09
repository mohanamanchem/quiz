const quizData = [
  {
    question: 'What is the capital of France?',
    options: ['London', 'Paris', 'Rome', 'Berlin'],
    answer: 'Paris'
  },
{
    question: 'Which city is known as the   city of pearls?',
    options: ['Mysore,', 'Jodhpur', 'Hyderabad', 'Kolkata'],
    answer: 'Hyderabad'
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Jupiter', 'Mars', 'Venus', 'Mercury'],
    answer: 'Mars'
  },

{
    question: 'Which city is known as the green  city?',
    options: ['Mysore', 'Jodhpur', 'Hyderabad', 'Kolkata'],
    answer: 'Mysore'
  },
{
    question: 'Which city is known as the   city of joy?',
    options: ['Mysore,', 'Jodhpur', 'Hyderabad', 'Kolkata'],
    answer: 'Kolkata'
  },
{
    question: 'Which city is known as the blue  city?',
    options: ['Mysore,', 'Jodhpur', 'Hyderabad', 'Kolkata'],
    answer: 'Jodhpur'
  },
  // Add more questions similarly
];

let currentQuestion = 0;
const questionText = document.getElementById('questionText');
const options = document.querySelectorAll('.option');
const feedback = document.getElementById('feedback');

function loadQuestion() {
  questionText.textContent = quizData[currentQuestion].question;
  quizData[currentQuestion].options.forEach((option, index) => {
    options[index].textContent = option;
  });
}

function checkAnswer(selectedOption) {
  const userAnswer = selectedOption.textContent;
  const correctAnswer = quizData[currentQuestion].answer;

  if (userAnswer === correctAnswer) {
    feedback.textContent = 'Correct Answer!';
  } else {
    feedback.textContent = `Wrong Answer! The correct answer is: ${correctAnswer}`;
  }

  currentQuestion++;
  if (currentQuestion < quizData.length) {
    setTimeout(() => {
      feedback.textContent = '';
      loadQuestion();
    }, 1500);
  } else {
    questionText.textContent = 'Quiz Complete!';
    document.querySelector('.options').innerHTML = '';
  }
}

loadQuestion();
