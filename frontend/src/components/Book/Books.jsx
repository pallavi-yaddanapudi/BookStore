import React, { useEffect, useState } from "react";
import axios from "axios";
import Book from "./Book.jsx";
import "./Book.css";

const URL = "https://bookstore-skyx.onrender.com/books";

const fetchHandler = async () => {
  try {
    const res = await axios.get(URL);
    return res.data.books;
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchHandler().then((data) => {
      if (data) setBooks(data);
    });
  }, []);

  // Function to update state after a book is deleted
  const handleDelete = (id) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book._id !== id));
  };

  return (
    <div>
      <ul>
        {books.length > 0 ? (
          books.map((book) => (
            <li key={book._id}>
              <Book book={book} onDelete={handleDelete} />
            </li>
          ))
        ) : (
          <p>Loading books...</p>
        )}
      </ul>
    </div>
  );
};

export default Books;
