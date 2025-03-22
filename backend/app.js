const express = require("express");
const mongoose = require("mongoose");
const MONGO_URL = "mongodb+srv://admin:HD6hh1JDTqp8eLpd@cluster0.5zigb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const app= express();
const bookRouter = require("./routes/book.js");
const cors = require('cors');


app.use(express.json());
app.use(cors()); 
app.use('/uploads', express.static('uploads'));
app.use("/books",bookRouter);

main()
    .then(() => {
        console.log("connection succesfull");
    })
    .catch((err) => {
        console.log(err);
    });
    async function main() {
        mongoose.connect(MONGO_URL)
    }

app.listen(8080,() => {
    console.log("server is running on port 8080");
} );