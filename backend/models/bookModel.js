import mongoose from "mongoose";

// define schema for book (called bookSchema)
const bookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        publishYear: {
            type: Number,
            required: true
        },
    },
    {
        timestamps: true
    }
);

//define model for book (using bookSchema) (called Book)
const Book = mongoose.model("Book", bookSchema);

//export this Book model
export default Book;