import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const defaultDeck = [
  { id: 1, front: "Capital of Italy?", back: "Rome" },
  { id: 2, front: "React is a...?", back: "JavaScript library" },
  { id: 3, front: "What is H2O?", back: "Water" },
];

const loadFromStorage = () => {
  const data = localStorage.getItem("spaced-flashcards");
  return data ? JSON.parse(data) : {};
};

const saveToStorage = (schedulingData) => {
  localStorage.setItem("spaced-flashcards", JSON.stringify(schedulingData));
};

const initializeSchedule = (deck) => {
  const today = new Date().toISOString().slice(0, 10);
  return deck.reduce((acc, card) => {
    acc[card.id] = {
      interval: 1,
      repetitions: 0,
      easiness: 2.5,
      dueDate: today,
    };
    return acc;
  }, {});
};

const getDueCards = (deck, schedule) => {
  const today = new Date().toISOString().slice(0, 10);
  return deck.filter((card) => schedule[card.id]?.dueDate <= today);
};

const updateSchedule = (cardId, grade, schedule) => {
  const entry = schedule[cardId];
  if (grade >= 3) {
    if (entry.repetitions === 0) {
      entry.interval = 1;
    } else if (entry.repetitions === 1) {
      entry.interval = 6;
    } else {
      entry.interval = Math.round(entry.interval * entry.easiness);
    }
    entry.repetitions++;
  } else {
    entry.repetitions = 0;
    entry.interval = 1;
  }
  entry.easiness += 0.1 - (5 - grade) * (0.08 + (5 - grade) * 0.02);
  if (entry.easiness < 1.3) entry.easiness = 1.3;

  const nextDate = new Date();
  nextDate.setDate(nextDate.getDate() + entry.interval);
  entry.dueDate = nextDate.toISOString().slice(0, 10);

  return { ...schedule, [cardId]: entry };
};

const SpacedRepetitionFlashcards = () => {
  // eslint-disable-next-line no-unused-vars
  const [deck, setDeck] = useState(defaultDeck);
  const [schedule, setSchedule] = useState({});
  const [dueCards, setDueCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showBack, setShowBack] = useState(false);

  useEffect(() => {
    let stored = loadFromStorage();
    if (Object.keys(stored).length === 0) {
      stored = initializeSchedule(defaultDeck);
    }
    setSchedule(stored);
    setDueCards(getDueCards(defaultDeck, stored));
  }, []);

  const handleGrade = (grade) => {
    const cardId = dueCards[currentIndex].id;
    const updated = updateSchedule(cardId, grade, schedule);
    saveToStorage(updated);
    setSchedule(updated);

    const updatedDue = getDueCards(deck, updated);
    setDueCards(updatedDue);
    setCurrentIndex(0);
    setShowBack(false);
  };

  if (dueCards.length === 0) {
    return (
      <div className="text-center p-10">
        <h2 className="text-2xl font-semibold">🎉 You're all caught up!</h2>
        <p className="text-gray-500">No cards due today.</p>
      </div>
    );
  }

  const currentCard = dueCards[currentIndex];

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-indigo-100 via-blue-50 to-white py-12 px-4 w-full">
      <div className="mb-10 text-center max-w-2xl">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-2 animate-fade-in">
          📚 Welcome to Spaced Repetition Flashcards
        </h1>

        <p className="text-lg text-gray-600 my-5">
          Master your knowledge with spaced repetition flashcards! Review cards
          at optimal intervals to enhance retention and recall. Perfect for
          language learning, exam prep, or any subject you want to conquer.
          Tailor your study sessions for maximum efficiency!
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 transition"
        >
          Go to Home
        </Link>
      </div>
      <div className="mt-10 bg-white shadow rounded-xl p-6 w-full sm:w-1/2">
        <div
          className="bg-indigo-50 rounded-xl p-6 cursor-pointer"
          onClick={() => setShowBack((prev) => !prev)}
        >
          <p className="text-xl text-center">
            {showBack ? currentCard.back : currentCard.front}
          </p>
        </div>

        {showBack && (
          <div className="mt-4 text-center">
            <p className="mb-2 text-gray-600">How well did you remember it?</p>
            <div className="flex justify-center space-x-2">
              {[0, 1, 2, 3, 4, 5].map((grade) => (
                <button
                  key={grade}
                  onClick={() => handleGrade(grade)}
                  className="px-3 py-1 rounded bg-indigo-500 text-white hover:bg-indigo-600"
                >
                  {grade}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SpacedRepetitionFlashcards;
