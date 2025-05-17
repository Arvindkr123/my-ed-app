import { useState } from "react";
import { Link } from "react-router-dom";
const quizQuestions = [
  {
    question: "What is the capital of Germany?",
    options: ["Berlin", "Munich", "Frankfurt", "Hamburg"],
    answer: "Berlin",
  },
  {
    question: "Which language is used to style web pages?",
    options: ["HTML", "jQuery", "CSS", "XML"],
    answer: "CSS",
  },
  { question: "What is 3 x 4?", options: ["6", "12", "9", "16"], answer: "12" },
  {
    question: "What is the largest ocean?",
    options: ["Atlantic", "Indian", "Pacific", "Arctic"],
    answer: "Pacific",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Venus", "Jupiter"],
    answer: "Mars",
  },
  {
    question: "What is the square root of 81?",
    options: ["9", "8", "7", "6"],
    answer: "9",
  },
  {
    question: "Which gas do humans need to breathe?",
    options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Helium"],
    answer: "Oxygen",
  },
  {
    question: "What is the boiling point of water?",
    options: ["100°C", "90°C", "80°C", "120°C"],
    answer: "100°C",
  },
  {
    question: "HTML stands for?",
    options: [
      "HyperText Markup Language",
      "HighText Machine Language",
      "Hyperloop Machine Language",
      "None",
    ],
    answer: "HyperText Markup Language",
  },
  {
    question: "CSS stands for?",
    options: [
      "Cascading Style Sheets",
      "Creative Style System",
      "Color Style Sheets",
      "None",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question: "What is the capital of France?",
    options: ["Paris", "Lyon", "Marseille", "Nice"],
    answer: "Paris",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Van Gogh"],
    answer: "Leonardo da Vinci",
  },
  {
    question: "Which is the smallest prime number?",
    options: ["1", "2", "3", "5"],
    answer: "2",
  },
  {
    question: "What is H₂O?",
    options: ["Water", "Oxygen", "Hydrogen", "Carbon"],
    answer: "Water",
  },
  {
    question: "Which country hosted the 2016 Olympics?",
    options: ["Brazil", "China", "UK", "Russia"],
    answer: "Brazil",
  },
  {
    question: "What color is chlorophyll?",
    options: ["Green", "Red", "Blue", "Yellow"],
    answer: "Green",
  },
  {
    question: "What is 15 + 6?",
    options: ["21", "22", "20", "19"],
    answer: "21",
  },
  {
    question: "What is 100 divided by 4?",
    options: ["25", "20", "30", "40"],
    answer: "25",
  },
  {
    question: "Which animal is known as the king of the jungle?",
    options: ["Lion", "Tiger", "Elephant", "Bear"],
    answer: "Lion",
  },
  {
    question: "What is the capital of Japan?",
    options: ["Tokyo", "Kyoto", "Osaka", "Hiroshima"],
    answer: "Tokyo",
  },
  {
    question: "What gas do plants absorb?",
    options: ["Carbon Dioxide", "Oxygen", "Hydrogen", "Nitrogen"],
    answer: "Carbon Dioxide",
  },
  {
    question: "Who discovered gravity?",
    options: ["Newton", "Einstein", "Galileo", "Tesla"],
    answer: "Newton",
  },
  {
    question: "What is the longest river?",
    options: ["Nile", "Amazon", "Yangtze", "Mississippi"],
    answer: "Nile",
  },
  {
    question: "Which instrument has keys, pedals, and strings?",
    options: ["Piano", "Guitar", "Violin", "Drums"],
    answer: "Piano",
  },
  {
    question: "Which continent is Egypt in?",
    options: ["Africa", "Asia", "Europe", "South America"],
    answer: "Africa",
  },
  {
    question: "Which is the tallest mammal?",
    options: ["Giraffe", "Elephant", "Horse", "Camel"],
    answer: "Giraffe",
  },
  {
    question: "Which planet is closest to the Sun?",
    options: ["Mercury", "Venus", "Mars", "Earth"],
    answer: "Mercury",
  },
  {
    question: "How many days are there in a leap year?",
    options: ["366", "365", "364", "367"],
    answer: "366",
  },
  {
    question: "What is the freezing point of water?",
    options: ["0°C", "32°C", "100°C", "-1°C"],
    answer: "0°C",
  },
  {
    question: "Which language runs in a browser?",
    options: ["JavaScript", "Python", "C++", "Java"],
    answer: "JavaScript",
  },
  {
    question: "Who is known as the father of computers?",
    options: ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"],
    answer: "Charles Babbage",
  },
  {
    question: "Which is not a programming language?",
    options: ["HTML", "Python", "Java", "C++"],
    answer: "HTML",
  },
  {
    question: "What is 10 x 10?",
    options: ["100", "90", "110", "120"],
    answer: "100",
  },
  {
    question: "What does CPU stand for?",
    options: [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Performance Utility",
      "None",
    ],
    answer: "Central Processing Unit",
  },
  {
    question: "Which animal lays eggs?",
    options: ["Duck", "Cat", "Dog", "Cow"],
    answer: "Duck",
  },
  {
    question: "What does RAM stand for?",
    options: [
      "Random Access Memory",
      "Read Access Mode",
      "Run Access Machine",
      "None",
    ],
    answer: "Random Access Memory",
  },
  {
    question: "Who invented the light bulb?",
    options: [
      "Thomas Edison",
      "Albert Einstein",
      "Isaac Newton",
      "Nikola Tesla",
    ],
    answer: "Thomas Edison",
  },
  {
    question: "What is the capital of Canada?",
    options: ["Ottawa", "Toronto", "Vancouver", "Montreal"],
    answer: "Ottawa",
  },
  {
    question: "Which bird is known for its colorful feathers?",
    options: ["Peacock", "Sparrow", "Crow", "Pigeon"],
    answer: "Peacock",
  },
  {
    question: "Which shape has three sides?",
    options: ["Triangle", "Square", "Circle", "Rectangle"],
    answer: "Triangle",
  },
];

const QuizApp = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (option) => {
    if (option === quizQuestions[current].answer) {
      setScore(score + 1);
    }
    if (current < quizQuestions.length - 1) {
      setCurrent(current + 1);
    } else {
      setShowScore(true);
    }
  };

  const handleRetry = () => {
    setCurrent(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 to-indigo-100 px-4 py-10">
      {/* Intro Header */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-2 animate-fade-in">
          📚 Welcome to Quiz
        </h1>
        <p className="text-lg text-gray-600 max-w-xl my-5">
          Test your knowledge with our quick and interactive quiz. Answer each
          question, get instant feedback, and see your final score. Perfect for
          sharpening your skills and challenging yourself!
        </p>

        <Link
          to="/"
          className="px-6 py-3 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 transition"
        >
          Go to Home
        </Link>
      </div>

      <div className="bg-white shadow-md rounded-xl p-6 max-w-xl w-full">
        {showScore ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Quiz Complete 🎉</h2>
            <p className="text-lg mb-6">
              Your score: {score} / {quizQuestions.length}
            </p>
            <button
              onClick={handleRetry}
              className="px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition"
            >
              Retry Quiz
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Question {current + 1} of {quizQuestions.length}
            </h2>
            <p className="mb-6 text-lg">{quizQuestions[current].question}</p>
            <div className="grid gap-4">
              {quizQuestions[current].options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswer(option)}
                  className="px-4 py-2 bg-indigo-100 hover:bg-indigo-200 text-indigo-800 font-medium rounded-lg transition"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizApp;
