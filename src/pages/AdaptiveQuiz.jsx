import { useState } from "react";
import { Link } from "react-router-dom";

const questionPool = {
  easy: [
    { question: "2 + 2", options: ["3", "4", "5", "6"], answer: "4" },
    {
      question: "Sun rises from the?",
      options: ["West", "East", "North", "South"],
      answer: "East",
    },
  ],
  medium: [
    {
      question: "What is the capital of Italy?",
      options: ["Rome", "Milan", "Naples", "Venice"],
      answer: "Rome",
    },
    {
      question: "CSS stands for?",
      options: [
        "Cascading Style Sheets",
        "Computer Style Sheets",
        "Creative Style System",
        "Color Style Sheet",
      ],
      answer: "Cascading Style Sheets",
    },
  ],
  hard: [
    {
      question: "What is the time complexity of binary search?",
      options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
      answer: "O(log n)",
    },
    {
      question: "What does React.useEffect do?",
      options: [
        "Fetch data",
        "Update state",
        "Handle side effects",
        "Render UI",
      ],
      answer: "Handle side effects",
    },
  ],
};

const getNextQuestion = (pool, level) => {
  const available = pool[level];
  return available[Math.floor(Math.random() * available.length)];
};

const AdaptiveQuiz = () => {
  const [difficulty, setDifficulty] = useState("medium");
  const [question, setQuestion] = useState(
    getNextQuestion(questionPool, difficulty)
  );
  const [score, setScore] = useState(0);

  const handleAnswer = (selected) => {
    const isCorrect = selected === question.answer;
    if (isCorrect) {
      setScore(score + 1);
      if (difficulty === "easy") setDifficulty("medium");
      else if (difficulty === "medium") setDifficulty("hard");
    } else {
      if (difficulty === "hard") setDifficulty("medium");
      else if (difficulty === "medium") setDifficulty("easy");
    }

    setQuestion(getNextQuestion(questionPool, difficulty));
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 to-indigo-100 px-4 py-10">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-purple-700 mb-2 animate-fade-in">
            🎯 Adaptive Quiz Engine
          </h1>
          <p className="text-lg text-gray-600 max-w-xl my-5">
            Challenge yourself with our smart adaptive quiz! Questions adjust in
            difficulty based on your answers — improving as you do. Whether
            you're a beginner or advanced, every session is tailored to your
            knowledge level. Perfect for mastering topics at your pace!
          </p>
          <Link
            to="/"
            className="px-6 py-3 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition"
          >
            Go to Home
          </Link>
        </div>
        <div className="max-w-md w-full p-6 bg-white shadow rounded-lg">
          <h2 className="text-xl font-bold mb-4">Difficulty: {difficulty}</h2>
          <p className="mb-4">{question.question}</p>
          <div className="grid gap-3">
            {question.options.map((opt) => (
              <button
                key={opt}
                onClick={() => handleAnswer(opt)}
                className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition"
              >
                {opt}
              </button>
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-600">Score: {score}</p>
        </div>
      </div>
    </>
  );
};

export default AdaptiveQuiz;
