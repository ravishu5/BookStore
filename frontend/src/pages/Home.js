import { useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {AiOutlineEdit} from 'react-icons/ai';
import {BsInfoCircle} from 'react-icons/bs'
import {MdOutlineAddBox, MdOutlineDelete} from 'react-icons/md'
import Spinner from '../components/Spinner';

const Home = () => {
    
//     const bookData = {
//         count : 4,
//         data : [
//             {
//                 _id: 1,
//                 title: 'The Lord of the Rings',
//                 author: 'J.R.R. Tolkien',
//                 publishYear: 1954
//             },
//             {
//                 _id: 2,
//                 title: 'The Hobbit',
//                 author: 'J.R.R. Tolkien',
//                 publishYear: 1937
//             },
//             {
//                 _id: 3,
//                 title: 'The Silmarillion',
//                 author: 'J.R.R. Tolkien',
//                 publishYear: 1977
//             },
//             {
//                 _id: 4,
//                 title: 'The Children of Hurin',
//                 author: 'J.R.R. Tolkien',
//                 publishYear: 2007
//             }
//         ]
//     }

    const [loading, setLoading] = useState(false);
    const [books, setBooks] = useState([]);

    useEffect(()=>{
        setLoading(true);
        axios
            .get('http://localhost:5555/books')
            .then((response)=>{
                setBooks(response.data.data);  //response.data is data we get from api, .data is the data object inside it.
                setLoading(false);
            })
            .catch((error)=>{
                console.log(error);
                setLoading(false);
            })
    },[]);

    return (
        <div className='p-4'>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl my-8'>Book List</h1>
                <Link to='/books/create'>
                    <MdOutlineAddBox className='text-sky-800 text-4xl'/>
                </Link>
                <Link></Link>
            </div>
            {loading ? (
                <Spinner />
            ) : (
                <table className='w-full border-separate border-spacing-2'>
                    <thead>
                        <tr>
                            <th className='border border-slate-600 rounded-md'>No.</th>
                            <th className='border border-slate-600 rounded-md'>Title</th>
                            <th className='border border-slate-600 rounded-md max-md:hidden'>Author</th> {/* column will be hidden when screen size is max-md */}
                            <th className='border border-slate-600 rounded-md max-md:hidden'>Publish Year</th>
                            <th className='border border-slate-600 rounded-md'>Content</th>
                        </tr>
                    </thead>
                    <tbody>
                            {books.map((book, index)=> (
                            <tr key={book._id} className='h-8'>
                                <td className='border border-slate-700 rounded-md text-center'>{index+1}</td>
                                <td className='border border-slate-700 rounded-md text-center'>{book.title}</td>
                                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>{book.author}</td>
                                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>{book.publishYear}</td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    <div className='flex justify-center gap-x-4'>
                                        <Link to={`/books/details/${book._id}`}><BsInfoCircle className='text-2xl text-green-800'/></Link>
                                        <Link to={`/books/edit/${book._id}`}><AiOutlineEdit className='text-2xl text-yellow-600'/></Link>
                                        <Link to={`/books/delete/${book._id}`}><MdOutlineDelete className='text-2xl text-red-600'/></Link>
                                    </div>
                                </td>
                            </tr>
                            ))}
                    </tbody>
                </table>
            )
            }
        </div>
    );
};

export default Home;