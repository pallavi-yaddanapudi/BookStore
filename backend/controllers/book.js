const Book = require("../models/book.js");

module.exports.getAllBooks = async(req,res,next) => {
    let books;
    try {
        books = await Book.find();

    } catch(err) {
        console.log(err);
    }
    if(!books) {
        return res.status(404).json({message:"no books found"});
    }
    return res.status(200).json({books});
};

module.exports.getBook = async(req,res,next) => {
    const id = req.params.id;
    let book;
    try {
        book = await Book.findById(id);

    } catch(err) {
        console.log(err);
    }
    if(!book) {
        return res.status(404).json({message:"no book found"});
    }
    return res.status(200).json({book});

}

module.exports.addBook = async (req,res,next) => {
    const {name,author,description,price,avaible,image} = req.body;
    let book;
    try {
        book = new Book({name,author,description,price,avaible,image});
        await book.save();
    } catch(err) {
        console.log(err);
    }
    if(!book) {
        return res.status(404).json({message:"unable to add"});
    }
    return res.status(201).json({book});
};

module.exports.updateBook = async (req,res,next) => {
    const id = req.params.id;
    const {name,author,description,price,avaible,image} = req.body;
    let book;
    try {
        book = await Book.findByIdAndUpdate(id,{
            name,
            author,
            description,
            price,
            avaible,
            image
        });
        book = await book.save();
    } catch(err) {
        console.log(err);
    } 
    if(!book) {
        return res.status(404).json({message:"unable to update the book details"});
    }
    return res.status(201).json({book});
};

module.exports.destroyBook = async (req,res,next) => {
    const id = req.params.id;
    let book;
    try {
        book = await Book.findByIdAndDelete(id);
    } catch(err) {
        console.log(err);
    }
    if(!book) {
        return res.status(404).json({message:"unable to delete book"});
    }
    return res.status(201).json({message:"succesfully deleted the book"});

}