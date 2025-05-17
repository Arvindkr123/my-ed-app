import { Link } from "react-router-dom";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const MarkdownNoteEditor = () => {
  const [markdown, setMarkdown] = useState("# Write your markdown here...");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 to-indigo-100 px-4 py-10">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-purple-700 mb-2 animate-fade-in">
          📝 Markdown Note Editor
        </h1>
        <p className="text-lg text-gray-600 max-w-xl my-5">
          Take notes your way with our clean, distraction-free Markdown editor.
          Write on the left, preview on the right — in real time. Perfect for
          journaling, blogging, or organizing ideas with formatting that fits
          your style.
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition"
        >
          Go to Home
        </Link>
      </div>
      <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto w-full">
        <textarea
          className="w-full md:w-1/2 h-[70vh] p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          placeholder="Type your markdown..."
        />

        {/* Live Preview */}
        <div className="w-full md:w-1/2 h-[70vh] p-4 bg-white rounded-lg border border-gray-300 overflow-auto prose max-w-full">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default MarkdownNoteEditor;
