import React from "react";

const ResultCard = ({ score, onRestart }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center animate-fade-in">
        <h2 className="text-3xl font-bold text-indigo-600 mb-4">
          🎉 All Done!
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          ✅ <strong>Know:</strong> {score.know} <br />❌{" "}
          <strong>Don't Know:</strong> {score.dontKnow}
        </p>
        <button
          onClick={onRestart}
          className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition duration-200"
        >
          Restart 🔁
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
