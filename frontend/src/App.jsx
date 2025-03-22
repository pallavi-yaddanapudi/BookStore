import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import AddBook from "./components/AddBook.jsx";
import Books from "./components/Book/Books.jsx";
import BookDetails from "./components/Book/BookDetails.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <header className="header">
          <Header />
        </header>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddBook />} />
            <Route path="/books" element={<Books />} />
            <Route path="/about" element={<About />} />
            <Route path="/books/:id" element={<BookDetails />} />
          </Routes>
        </main>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
