import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const BASE_URL = process.env.BACKEND_URL;

const DeleteBook = () => {
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();
    const {id} = useParams();

    const handleDelete = () => {
        setLoading(true);
        axios
            .delete(`${BASE_URL}/${id}`)
            .then(()=>{
                setLoading(false);
                navigate('/');
            })
            .catch((error)=> {
                setLoading(false);
                alert('an Error occurred while deleting book');
                console.log(error);
            });
    };

    return (
      <div className='p-4'>
        <BackButton/>
        <h1 className="text-3xl my-4">Delete Book</h1>
        {loading ? <Spinner/> : ''}
        <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
            <h3>Are you sure You want to delete this book?</h3>
            <button
            onClick={handleDelete}
            className="p-4 bg-red-600 text-white mx-8 mt-8 w-full"
            >
                Yes, Delete it
            </button>
        </div>

      </div>  
    );
};

export default DeleteBook;