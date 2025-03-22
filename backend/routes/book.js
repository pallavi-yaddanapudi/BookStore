const express = require("express");
const router = express.Router();
const Book = require("../models/book.js");
const booksControllers = require("../controllers/book.js")

router.get("/",booksControllers.getAllBooks);
router.post("/",booksControllers.addBook);
router.get("/:id",booksControllers.getBook);
router.put("/:id",booksControllers.updateBook);
router.delete("/:id",booksControllers.destroyBook);

module.exports = router;