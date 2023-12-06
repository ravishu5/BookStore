import '../index.css';
import {BrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateBook from './pages/CreateBook';
import ShowBook from './pages/ShowBook';
import EditBook from './pages/EditBook';
import DeleteBook from './pages/DeleteBook';
import Spinner from './components/Spinner'; 

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/books/create" element={<CreateBook/>} />
                <Route path="/books/details/:id" element={<ShowBook/>} />
                <Route path="/books/edit/:id" element={<EditBook/>} />
                <Route path="/books/delete/:id" element={<DeleteBook/>} />
            </Routes>
        </BrowserRouter>    
    );
};

export default App;