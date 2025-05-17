import { useState } from "react";
import Flashcard from "../components/Flashcard";
import ResultCard from "../components/ResultCard";
import { Link } from "react-router-dom";

const FlashcardViewer = () => {
  const flashcards = [
    { front: "What is the capital of France?", back: "Paris" },
    { front: "2 + 2", back: "4" },
    { front: "React is a ...?", back: "JavaScript library" },
    { front: "What gas do plants absorb?", back: "Carbon dioxide (CO₂)" },
    { front: "Who wrote 'Romeo and Juliet'?", back: "William Shakespeare" },
    { front: "What's the boiling point of water?", back: "100°C or 212°F" },
    { front: "What is the largest planet?", back: "Jupiter" },
    { front: "What is 9 × 8?", back: "72" },
    { front: "HTML stands for?", back: "HyperText Markup Language" },
    { front: "What organ pumps blood?", back: "The heart" },
    { front: "Who painted the Mona Lisa?", back: "Leonardo da Vinci" },
    {
      front: "Photosynthesis occurs in which part of the plant?",
      back: "Leaves",
    },
    {
      front: "What is the speed of light?",
      back: "299,792 km/s (approx. 300,000 km/s)",
    },
    { front: "Python is a...", back: "Programming language" },
    { front: "What is H₂O?", back: "Water" },
    { front: "What’s the square root of 64?", back: "8" },
    { front: "CSS stands for?", back: "Cascading Style Sheets" },
    { front: "What is the chemical symbol for gold?", back: "Au" },
    { front: "How many continents are there?", back: "7" },
    { front: "What year did the moon landing happen?", back: "1969" },
  ];

  const [index, setIndex] = useState(0);
  const [score, setScore] = useState({ know: 0, dontKnow: 0 });
  const [showResult, setShowResult] = useState(false);

  const handleKnow = () => {
    setScore((prev) => ({ ...prev, know: prev.know + 1 }));
    nextCard();
  };

  const handleDontKnow = () => {
    setScore((prev) => ({ ...prev, dontKnow: prev.dontKnow + 1 }));
    nextCard();
  };

  const nextCard = () => {
    if (index < flashcards.length - 1) {
      setIndex(index + 1);
    } else {
      setShowResult(true); // show modal
    }
  };

  const handleRestart = () => {
    setIndex(0);
    setScore({ know: 0, dontKnow: 0 });
    setShowResult(false);
  };
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-indigo-100 via-blue-50 to-white py-12 px-4">
      {/* Intro Header */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-2 animate-fade-in">
          📚 Welcome to FlashCard View
        </h1>

        <p className="text-lg text-gray-600 max-w-xl my-5">
          Boost your memory with our interactive flashcards. Click to flip the
          card, then choose whether you knew the answer.
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 transition"
        >
          Go to Home
        </Link>
      </div>

      {/* Flashcard Component */}
      <Flashcard
        front={flashcards[index].front}
        back={flashcards[index].back}
        onKnow={handleKnow}
        onDontKnow={handleDontKnow}
      />

      {/* Result Modal */}
      {showResult && <ResultCard score={score} onRestart={handleRestart} />}
    </div>
  );
};
export default FlashcardViewer;
