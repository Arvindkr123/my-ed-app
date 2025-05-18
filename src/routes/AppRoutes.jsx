import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import FlashcardViewer from "../pages/FlashcardViewer";
import QuizApp from "../pages/QuizApp.jsx";
import DailyHabitChecklist from "../pages/DailyHabitChecklist.jsx";
import CourseCatalog from "../pages/CourseCatalog.jsx";
import ReadingLog from "../pages/ReadingLog.jsx";
import MarkdownNoteEditor from "../pages/MarkdownNoteEditor.jsx";
import AdaptiveQuiz from "../pages/AdaptiveQuiz.jsx";
import InteractiveVideoPlayer from "../pages/InteractiveVideoPlayer.jsx";
import LessonTimeline from "../pages/LessonTimeline.jsx";
import SpacedRepetitionFlashcards from "../pages/SpacedRepetitionFlashcards.jsx";

const AppRoutes = () => {
  return (
    <BrowserRouter basename="/my-ed-app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz-app" element={<QuizApp />} />
        <Route path="/flashcards" element={<FlashcardViewer />} />
        <Route path="/habits" element={<DailyHabitChecklist />} />
        <Route path="/courses" element={<CourseCatalog />} />
        <Route path="/readingLog" element={<ReadingLog />} />
        <Route path="/markdownEditor" element={<MarkdownNoteEditor />} />
        <Route path="/adaptiveQuiz" element={<AdaptiveQuiz />} />
        <Route
          path="/interactiveVideoPlayer"
          element={<InteractiveVideoPlayer />}
        />
        <Route path="/lessonTimeline" element={<LessonTimeline />} />
        <Route
          path="/spacedRepetitionFlashcards"
          element={<SpacedRepetitionFlashcards />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
