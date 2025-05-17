import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const defaultHabits = [
  "Drink 8 glasses of water",
  "Exercise for 30 minutes",
  "Read for 20 minutes",
  "Meditate for 10 minutes",
  "Write journal",
];

const DailyHabitChecklist = () => {
  const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
  const storageKey = `habits-${today}`;

  const [habits, setHabits] = useState(() => {
    const saved = localStorage.getItem(storageKey);
    return saved
      ? JSON.parse(saved)
      : defaultHabits.map((task) => ({ task, done: false }));
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(habits));
  }, [habits, storageKey]);

  const toggleHabit = (index) => {
    const updated = [...habits];
    updated[index].done = !updated[index].done;
    setHabits(updated);
  };

  const completed = habits.filter((h) => h.done).length;
  const percentage = Math.round((completed / habits.length) * 100);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 to-indigo-100 px-4 py-10">
      {/* Intro Header */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-green-700 mb-2 animate-fade-in">
          ✅ Daily Habit Tracker
        </h1>
        <p className="text-lg text-gray-600 max-w-xl my-5">
          Stay consistent and build powerful routines! Check off your daily
          habits, monitor your progress with a live progress bar, and make every
          day count. Your progress is saved automatically to keep you motivated!
        </p>

        <Link
          to="/"
          className="px-6 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition"
        >
          Go to Home
        </Link>
      </div>

      <ul className="space-y-3 w-full max-w-xl">
        {habits.map((habit, i) => (
          <li
            key={i}
            className={`flex items-center justify-between p-3 rounded-lg border ${
              habit.done
                ? "bg-green-50 border-green-300"
                : "bg-gray-50 border-gray-300"
            }`}
          >
            <span
              className={`${
                habit.done ? "line-through text-gray-400" : "text-gray-800"
              }`}
            >
              {habit.task}
            </span>
            <input
              type="checkbox"
              checked={habit.done}
              onChange={() => toggleHabit(i)}
              className="w-5 h-5 text-indigo-600"
            />
          </li>
        ))}
      </ul>

      {/* Progress Bar */}
      <div className="mt-6 w-full max-w-xl">
        <div className="text-sm font-medium text-gray-700 mb-1">
          Progress: {percentage}%
        </div>
        <div className="w-full bg-gray-400 rounded-full h-4">
          <div
            className="bg-indigo-500 h-4 rounded-full transition-all duration-300"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default DailyHabitChecklist;
