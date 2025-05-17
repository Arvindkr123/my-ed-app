import React, { useState } from "react";

const Flashcard = ({ front, back, onKnow, onDontKnow }) => {
  const [flipped, setFlipped] = useState(false);
  console.log("Flipped state:", flipped);

  return (
    <div className="flex flex-col items-center">
      {/* Flip Card */}
      <div
        onClick={() => setFlipped(!flipped)}
        className="relative w-3xl h-48 cursor-pointer perspective-1000"
      >
        <div
          className={`transition-transform duration-500 transform-style-preserve-3d w-full h-full ${
            flipped ? "rotate-y-180" : ""
          }`}
        >
          {/* Front */}
          <div className="absolute w-full h-full bg-gray-900 text-white rounded-xl shadow-lg flex items-center justify-center backface-hidden">
            <span className="text-xl font-medium">{front}</span>
          </div>

          {/* Back */}
          <div className="absolute w-full h-full bg-gray-700 text-white rounded-xl shadow-lg flex items-center justify-center rotate-y-180 backface-hidden">
            <span className="text-xl font-medium">{back}</span>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex gap-4">
        <button
          onClick={onKnow}
          className="flex items-center gap-2 px-5 py-2.5 bg-green-500 text-white font-semibold rounded-xl shadow-md hover:bg-green-600 active:scale-95 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-green-300"
        >
          ✅ Know
        </button>
        <button
          onClick={onDontKnow}
          className="flex items-center gap-2 px-5 py-2.5 bg-red-500 text-white font-semibold rounded-xl shadow-md hover:bg-red-600 active:scale-95 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-red-300"
        >
          ❌ Don't Know
        </button>
      </div>
    </div>
  );
};

export default Flashcard;
