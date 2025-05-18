import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  horizontalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const initialLessons = [
  { id: "lesson-1", title: "Intro to HTML" },
  { id: "lesson-2", title: "CSS Basics" },
  { id: "lesson-3", title: "JavaScript Fundamentals" },
  { id: "lesson-4", title: "React Basics" },
];

const SortableLessonCard = ({ lesson }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: lesson.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="w-48 p-4 bg-blue-100 rounded-lg shadow text-center cursor-grab"
    >
      <p className="font-medium text-blue-700">{lesson.title}</p>
    </div>
  );
};

const LessonTimeline = () => {
  const [lessons, setLessons] = useState(initialLessons);
  const navigate = useNavigate();

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = lessons.findIndex((l) => l.id === active.id);
    const newIndex = lessons.findIndex((l) => l.id === over.id);

    setLessons((lessons) => arrayMove(lessons, oldIndex, newIndex));
  };

  return (
    <div className="min-h-screen bg-blue-50 py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-blue-700">
        📆 Lesson Timeline Tracker
      </h1>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 my-5 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition cursor-pointer"
      >
        Go to Home
      </button>
      <div className="overflow-x-auto">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={lessons.map((l) => l.id)}
            strategy={horizontalListSortingStrategy}
          >
            <div className="flex gap-4 min-w-fit p-4 border border-blue-200 bg-white rounded-xl shadow">
              {lessons.map((lesson) => (
                <SortableLessonCard key={lesson.id} lesson={lesson} />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
};

export default LessonTimeline;
