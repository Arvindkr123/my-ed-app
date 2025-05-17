# 📘 MyEdApp — Educational Toolkit in React

An all-in-one educational web application built with **React**, designed to boost learning efficiency through interactive tools like flashcards, quizzes, habit tracking, video-based learning, and spaced repetition.

---

## 🚀 Features Overview

### 1. 🔄 Flashcard Viewer

- Flip animation using CSS or `react-flip-card`
- "Know" and "Don't Know" buttons for self-assessment
- Tracks correct vs incorrect answers

### 2. 🧠 Quiz App

- Multi-question flow with answer buttons
- Displays score at the end
- "Retry" option resets the quiz session

### 3. ✅ Daily Habit Tracker

- Checklist of daily routines
- Progress bar shows completion percentage
- Saves daily data in `localStorage`

### 4. 📚 Course Catalog

- Displays courses from a JSON structure
- Filter by topic, tags, or estimated time
- Interactive dropdowns or checkboxes for filtering

### 5. 📖 Reading Log

- Table view (HTML or TanStack Table)
- Columns: Book, Author, Rating (⭐), Date
- Sort by title, rating, etc.
- Emoji or star icon input for ratings

### 6. 📝 Markdown Note Editor

- Live preview using `marked` or `react-markdown`
- Real-time rendering of Markdown syntax
- Clean, distraction-free writing interface

### 7. 🎯 Adaptive Quiz

- Dynamic difficulty adjustment based on accuracy
- Questions tagged by difficulty level
- (Optional) SM-2 spaced repetition algorithm

### 8. 🎥 Interactive Video Player

- Custom video player using HTML5 or `react-player`
- Timestamped comment box for note-taking
- Comment list with jump-to-time navigation

### 9. 📅 Timeline-based Lesson Tracker

- Lessons as draggable cards using `react-beautiful-dnd`
- Horizontal timeline or calendar layout
- Drag & drop interface to reschedule lessons

### 10. ⏳ Spaced Repetition Flashcard Engine

- Implements SM-2 algorithm for scheduling reviews
- Tracks intervals, easiness factor, and due dates
- Stores data in `localStorage` or IndexedDB
- Dashboard for "Due", "Learned", "Forgotten" stats

---

## 🛠 Tech Stack

- **React 18 or 19** (version compatibility required for some packages)
- **Tailwind CSS** for styling
- **react-router-dom** for routing
- **react-player**, **react-markdown**, **TanStack Table**
- **localStorage** / **IndexedDB** for persistence
- **react-beautiful-dnd** for drag and drop functionality

---

## 📦 Installation

```bash
git clone https://github.com/your-username/my-ed-app.git
cd my-ed-app
npm install
npm run dev
```
