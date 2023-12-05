import express from "express";
import mongoose from "mongoose";
import Book from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from 'cors';

// const bodyParser = require('body-parser');
const app = express();

// middleware for parsing request body
app.use(express.json());

//middleware for handling CORS policy
app.use(cors());

app.get("/",(request,response)=>{
    return response.send("Hello World");
});

// middleware for all model routes
app.use('/books',booksRoute);

mongoose
    .connect("mongodb+srv://itsshankarravi:zxcvasdf@cluster0.co1xnm7.mongodb.net/")
    .then(()=>{
        console.log("MongoDB connected successfully");
        app.listen(5555,()=>{
            console.log("Server is running on port 5555");
        })
    })
    .catch((error)=>{
        console.log(error);
    });

// app.listen(5555,()=>{ // 5555 is the port number     //put it in .then so that it listens only after DB connects
//     console.log("Server is running on port 5555");
// })

