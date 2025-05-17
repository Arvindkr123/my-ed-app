import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Link, useNavigate } from "react-router-dom";

const initialLessons = [
  { id: "lesson-1", title: "Intro to HTML" },
  { id: "lesson-2", title: "CSS Basics" },
  { id: "lesson-3", title: "JavaScript Fundamentals" },
  { id: "lesson-4", title: "React Basics" },
];

const LessonTimeline = () => {
  const [lessons, setLessons] = useState(initialLessons);
  const navigate = useNavigate();

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(lessons);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setLessons(items);
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
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="lessons" direction="horizontal">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="flex gap-4 min-w-fit p-4 border border-blue-200 bg-white rounded-xl shadow"
              >
                {lessons.map((lesson, index) => (
                  <Draggable
                    key={lesson.id}
                    draggableId={lesson.id}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="w-48 p-4 bg-blue-100 rounded-lg shadow text-center"
                      >
                        <p className="font-medium text-blue-700">
                          {lesson.title}
                        </p>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
};

export default LessonTimeline;
