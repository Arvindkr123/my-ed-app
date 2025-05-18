import { Link, useNavigate } from "react-router-dom";
import {
  BookCheck,
  BookMarked,
  BookOpenIcon,
  CalendarCheck,
  MarsStrokeIcon,
} from "lucide-react";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-60% to-blue-50 flex flex-col items-center justify-center px-6 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12 max-w-2xl">
        <h1 className="text-5xl font-extrabold text-indigo-700 mb-4 animate-fade-in">
          📘 Welcome to the Learning App
        </h1>
        <p className="text-lg text-gray-600">
          Boost your knowledge with interactive flashcards, quizzes, and smart
          review tools – all in one place.
        </p>
      </div>

      {/* Feature Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 w-full max-w-5xl">
        <div
          onClick={() => navigate("/flashcards")}
          className="bg-white p-6 rounded-xl shadow hover:shadow-md transition cursor-pointer hover:bg-black hover:text-white"
        >
          <BookOpenIcon className="text-indigo-500 mb-3 w-8 h-8 mx-auto" />
          <h3 className="text-xl font-semibold text-indigo-700">
            Flip Flashcards
          </h3>
          <p className="text-gray-600 text-sm mt-2">
            Tap to reveal answers and test yourself in real time.
          </p>
        </div>

        <div
          onClick={() => navigate("/quiz-app")}
          className="bg-white p-6 rounded-xl shadow hover:shadow-md transition cursor-pointer hover:bg-black hover:text-white"
        >
          <BookCheck className="text-indigo-500 mb-3 w-8 h-8 mx-auto" />
          <h3 className="text-xl font-semibold text-indigo-700">Quiz App</h3>
          <p className="text-gray-600 text-sm mt-2">
            give quiz and check answers and test yourself in real time.
          </p>
        </div>

        <div
          onClick={() => navigate("/habits")}
          className="bg-white p-6 rounded-xl shadow hover:shadow-md transition cursor-pointer hover:bg-black hover:text-white"
        >
          <CalendarCheck className="text-green-500 mb-3 w-8 h-8 mx-auto" />
          <h3 className="text-xl font-semibold text-green-700">
            Daily Habit Tracker
          </h3>
          <p className="text-gray-600 text-sm mt-2">
            Build better routines! Track daily tasks and visualize progress with
            a live progress bar.
          </p>
        </div>

        <div
          onClick={() => navigate("/courses")}
          className="bg-white p-6 rounded-xl shadow hover:shadow-md transition cursor-pointer hover:bg-black hover:text-white"
        >
          <BookMarked className="text-blue-500 mb-3 w-8 h-8 mx-auto" />
          <h3 className="text-xl font-semibold text-blue-700">
            Course Catalog
          </h3>
          <p className="text-gray-600 text-sm mt-2">
            Explore a wide range of learning topics! Filter courses by subject
            or time, and find the perfect one to boost your knowledge.
          </p>
        </div>

        <div
          onClick={() => navigate("/readingLog")}
          className="bg-white p-6 rounded-xl shadow hover:shadow-md transition cursor-pointer hover:bg-black hover:text-white"
        >
          <BookMarked className="text-blue-500 mb-3 w-8 h-8 mx-auto" />
          <h3 className="text-xl font-semibold text-blue-700">
            Explore a World of Learning!
          </h3>
          <p className="text-gray-600 text-sm mt-2">
            Browse through an extensive catalog of courses tailored to your
            interests. Easily filter by topic, tags, or estimated time to find
            the perfect course that fits your schedule and goals. Start your
            learning journey with just a few clicks!
          </p>
        </div>

        <div
          onClick={() => navigate("/markdownEditor")}
          className="bg-white p-6 rounded-xl shadow hover:shadow-md transition cursor-pointer hover:bg-black hover:text-white"
        >
          <MarsStrokeIcon className="text-blue-500 mb-3 w-8 h-8 mx-auto" />
          <h3 className="text-xl font-semibold text-blue-700">
            Markdown Note Editor
          </h3>
          <p className="text-gray-600 text-sm mt-2">
            Take notes your way with our clean, distraction-free Markdown
            editor. Write on the left, preview on the right — in real time.
            Perfect for journaling, blogging, or organizing ideas with
            formatting that fits your style.
          </p>
        </div>

        <div
          onClick={() => navigate("/adaptiveQuiz")}
          className="bg-white p-6 rounded-xl shadow hover:shadow-md transition cursor-pointer hover:bg-black hover:text-white"
        >
          <div className="text-blue-500 mb-3 w-8 h-8 mx-auto text-2xl">🎯</div>
          <h3 className="text-xl font-semibold text-blue-700">
            Adaptive Quiz Engine
          </h3>
          <p className="text-gray-600 text-sm mt-2">
            Challenge yourself with our smart adaptive quiz! Questions adjust in
            difficulty based on your answers — improving as you do. Whether
            you're a beginner or advanced, every session is tailored to your
            knowledge level. Perfect for mastering topics at your pace!
          </p>
        </div>

        {/* <div
          onClick={() => navigate("/interactiveVideoPlayer")}
          className="bg-white p-6 rounded-xl shadow hover:shadow-md transition cursor-pointer hover:bg-black hover:text-white"
        >
          <div className="text-blue-500 mb-3 w-8 h-8 mx-auto text-2xl">🎬</div>
          <h3 className="text-xl font-semibold text-blue-700">
            Interactive Video Player
          </h3>
          <p className="text-gray-600 text-sm mt-2">
            Add comments to videos at specific times, jump to key moments, and
            enhance your learning experience. Perfect for note-taking and
          </p>
        </div> */}

        <div
          onClick={() => navigate("/lessonTimeline")}
          className="bg-white p-6 rounded-xl shadow hover:shadow-md transition cursor-pointer hover:bg-black hover:text-white"
        >
          <div className="text-blue-500 mb-3 w-8 h-8 mx-auto text-2xl">⌛</div>
          <h3 className="text-xl font-semibold text-blue-700">
            Timeline-based Lesson Tracker
          </h3>
          <p className="text-gray-600 text-sm mt-2">
            Track your learning progress with a timeline-based lesson tracker.
            Visualize your journey, set milestones, and stay motivated as you
            complete each lesson. Perfect for structured learning paths!
          </p>
        </div>

        <div
          onClick={() => navigate("/spacedRepetitionFlashcards")}
          className="bg-white p-6 rounded-xl shadow hover:shadow-md transition cursor-pointer hover:bg-black hover:text-white"
        >
          <div className="text-blue-500 mb-3 w-8 h-8 mx-auto text-2xl">⌛</div>
          <h3 className="text-xl font-semibold text-blue-700">
            Spaced Repetition Flashcards
          </h3>
          <p className="text-gray-600 text-sm mt-2">
            Master your knowledge with spaced repetition flashcards! Review
            cards at optimal intervals to enhance retention and recall. Perfect
            for language learning, exam prep, or any subject you want to
            conquer. Tailor your study sessions for maximum efficiency!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
