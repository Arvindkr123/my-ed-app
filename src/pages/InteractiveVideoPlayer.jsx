import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

const InteractiveVideoPlayer = () => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const playerRef = useRef(null);

  console.log(playerRef);

  const handleAddComment = () => {
    const currentTime = playerRef.current.getCurrentTime();
    if (commentText.trim()) {
      setComments([
        ...comments,
        { time: currentTime, text: commentText.trim() },
      ]);
      setCommentText("");
    }
  };

  const handleJumpTo = (time) => {
    playerRef.current.seekTo(time, "seconds");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-purple-700 mb-2 animate-fade-in">
          🎬 Interactive Video Player
        </h1>

        <p className="text-lg text-gray-600 max-w-xl my-5">
          Learn at your own pace with our interactive video player! Watch
          educational content, leave time-stamped comments, and jump directly to
          key moments. Perfect for note-taking, discussions, and revisiting
          important concepts with ease.
        </p>

        <Link
          to="/"
          className="px-6 py-3 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition"
        >
          Go to Home
        </Link>
      </div>

      <div className="w-full max-w-5xl">
        <ReactPlayer
          ref={playerRef}
          url="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"
          controls
          width="100%"
        />

        <div className="mt-6 bg-white p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">Add a Comment</h2>
          <div className="flex gap-2">
            <input
              type="text"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Write your comment..."
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2"
            />
            <button
              onClick={handleAddComment}
              className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600"
            >
              Add
            </button>
          </div>
        </div>

        <div className="mt-6 bg-white p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">Comments</h2>
          {comments.length === 0 ? (
            <p className="text-gray-500">No comments yet.</p>
          ) : (
            <ul className="space-y-3">
              {comments.map((comment, index) => (
                <li
                  key={index}
                  className="border-b pb-2 flex justify-between items-center"
                >
                  <span>{comment.text}</span>
                  <button
                    onClick={() => handleJumpTo(comment.time)}
                    className="text-indigo-600 hover:underline text-sm"
                  >
                    Jump to {comment.time.toFixed(1)}s
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default InteractiveVideoPlayer;
