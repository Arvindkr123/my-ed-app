import React, { useState } from "react";
import { Link } from "react-router-dom";

const initialBooks = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    rating: 4,
    date: "2023-04-10",
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    rating: 5,
    date: "2023-03-22",
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    rating: 3,
    date: "2023-02-15",
  },
];

const ReadingLog = () => {
  const [books, setBooks] = useState(initialBooks);
  const [sortKey, setSortKey] = useState("title");
  const [sortAsc, setSortAsc] = useState(true);

  const sortedBooks = [...books].sort((a, b) => {
    if (sortKey === "rating") {
      return sortAsc ? a.rating - b.rating : b.rating - a.rating;
    } else if (sortKey === "date") {
      return sortAsc
        ? new Date(a.date) - new Date(b.date)
        : new Date(b.date) - new Date(a.date);
    } else {
      // title or author - string compare
      return sortAsc
        ? a[sortKey].localeCompare(b[sortKey])
        : b[sortKey].localeCompare(a[sortKey]);
    }
  });

  const toggleSort = (key) => {
    if (key === sortKey) {
      setSortAsc(!sortAsc);
    } else {
      setSortKey(key);
      setSortAsc(true);
    }
  };

  const updateRating = (id, newRating) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === id ? { ...book, rating: newRating } : book
      )
    );
  };

  const renderStars = (rating, id) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`cursor-pointer text-xl ${
            i <= rating ? "text-yellow-400" : "text-gray-300"
          }`}
          onClick={() => updateRating(id, i)}
          role="button"
          aria-label={`Rate ${i} stars`}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 to-indigo-100 px-4 py-10">
      <div className="mb-10 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-2 animate-fade-in">
          Explore a World of Learning!
        </h1>
        <p className="text-lg text-center text-gray-600 my-5">
          Browse through an extensive catalog of courses tailored to your
          interests. Easily filter by topic, tags, or estimated time to find the
          perfect course that fits your schedule and goals. Start your learning
          journey with just a few clicks!
        </p>

        <Link
          to="/"
          className="px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition"
        >
          Go to Home
        </Link>
      </div>
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-700">
          📚 Reading Log
        </h2>
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-indigo-100">
              <th
                className="p-3 border border-gray-300 cursor-pointer"
                onClick={() => toggleSort("title")}
              >
                Book {sortKey === "title" ? (sortAsc ? "▲" : "▼") : ""}
              </th>
              <th
                className="p-3 border border-gray-300 cursor-pointer"
                onClick={() => toggleSort("author")}
              >
                Author {sortKey === "author" ? (sortAsc ? "▲" : "▼") : ""}
              </th>
              <th
                className="p-3 border border-gray-300 cursor-pointer"
                onClick={() => toggleSort("rating")}
              >
                Rating {sortKey === "rating" ? (sortAsc ? "▲" : "▼") : ""}
              </th>
              <th
                className="p-3 border border-gray-300 cursor-pointer"
                onClick={() => toggleSort("date")}
              >
                Date {sortKey === "date" ? (sortAsc ? "▲" : "▼") : ""}
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedBooks.map(({ id, title, author, rating, date }) => (
              <tr key={id} className="text-center hover:bg-indigo-50">
                <td className="border border-gray-300 p-3">{title}</td>
                <td className="border border-gray-300 p-3">{author}</td>
                <td className="border border-gray-300 p-3">
                  {renderStars(rating, id)}
                </td>
                <td className="border border-gray-300 p-3">{date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReadingLog;
