import React, { useState } from "react";
import { Link } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "Intro to React",
    topic: "Web Development",
    tags: ["react", "javascript"],
    estimatedTime: "4h",
  },
  {
    id: 2,
    title: "Data Structures in Python",
    topic: "Computer Science",
    tags: ["python", "algorithms"],
    estimatedTime: "6h",
  },
  {
    id: 3,
    title: "UI/UX Design Basics",
    topic: "Design",
    tags: ["design", "ux", "ui"],
    estimatedTime: "3h",
  },
  {
    id: 4,
    title: "Advanced CSS Techniques",
    topic: "Web Development",
    tags: ["css", "web"],
    estimatedTime: "5h",
  },
  {
    id: 5,
    title: "Machine Learning 101",
    topic: "Data Science",
    tags: ["ml", "python"],
    estimatedTime: "8h",
  },
];

const uniqueTopics = [...new Set(courses.map((c) => c.topic))];

const CourseCatalog = () => {
  const [selectedTopic, setSelectedTopic] = useState("All");

  const filteredCourses =
    selectedTopic === "All"
      ? courses
      : courses.filter((course) => course.topic === selectedTopic);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-blue-700 mb-2 animate-fade-in">
            📘 Explore Our Course Catalog
          </h1>
          <p className="text-lg text-center text-gray-600 my-5">
            Discover courses tailored to your learning goals! Browse by topic,
            filter by tags or duration, and find the perfect course to level up
            your skills. Simple to explore. Easy to start. Learn at your pace.
          </p>

          <Link
            to="/"
            className="px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition"
          >
            Go to Home
          </Link>
        </div>
        {/* Filter Dropdown */}
        <div className="mb-6 text-center">
          <label className="mr-2 text-lg font-medium text-gray-700">
            Filter by Topic:
          </label>
          <select
            className="px-4 py-2 border rounded-lg text-gray-700"
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value)}
          >
            <option value="All">All</option>
            {uniqueTopics.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </div>

        {/* Course List */}
        <div className="grid sm:grid-cols-2 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white p-5 rounded-xl shadow hover:shadow-md transition"
            >
              <h2 className="text-xl font-semibold text-indigo-600">
                {course.title}
              </h2>
              <p className="text-sm text-gray-500 mt-1 mb-2">
                Topic: {course.topic}
              </p>
              <p className="text-sm text-gray-500 mb-2">
                Estimated Time: {course.estimatedTime}
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {course.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-indigo-100 text-indigo-600 text-xs px-2 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseCatalog;
