import express from "express";
import Book from "../models/bookModel.js";

const router = express.Router();
//we will use this router for all route, so replace all app by router

// Route to save a new Book
router.post('/', async (request, response)=>{
    try {
        // console.log(request.body);
        if(
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ){
            return response.status(400).send({message : "Required field(s) missing"});
        }
        
        const newBook = {
            title : request.body.title,
            author : request.body.author,
            publishYear : request.body.publishYear
        };

        const book = await Book.create(request.body);

        return response.status(201).send(book);
    }
    catch(error){
        console.log(error.message);
        response.status(500).send({message : error.message});
    }
});

// Route to get all Books from Database
router.get('/',async (request,response)=>{
    try{
        const books = await Book.find({});
        return response.status(200).json({
            count: books.length,
            data : books
        });
    }
    catch(error){
        console.log(error.message);
        response.status(500).send({message : error.message});   
    }
});

// Route to get a Book by id
router.get('/:id',async (request,response)=>{
    try{
        const {id} = request.params;
        const book = await Book.findById(id);
        return response.status(200).json(book);
    }
    catch(error){
        console.log(error.message);
        response.status(500).send({message : error.message});   
    }
});

// Route to update a Book
router.put('/:id',async(request,response)=>{
    try{
        if(
            !request.body.title || 
            !request.body.author ||
            !request.body.publishYear
        )
        {
            return response.status(400).send({message : "All field are required to update"});
        }

        const {id} = request.params;

        const result = await Book.findByIdAndUpdate(id, request.body);
        if(!result) return response.status(404).json({message : 'Book not found'});

        return response.status(200).send({message: 'Book Updated Succesfully'});
    }
    catch(error){
        console.log(error.message);
        response.status(500).send({message : error.message});
    }
});

// Route to delete a Book 
router.delete('/:id',async(request,response)=>{
    try{
        const {id} = request.params;

        const result = await Book.findByIdAndDelete(id);
        if(!result) return response.status(404).send({message : "Book not found"});
        return response.status(200).send({message: 'Book Deleted Successfully'});
    }
    catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

export default router;