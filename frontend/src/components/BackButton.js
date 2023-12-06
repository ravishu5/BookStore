import { Link } from "react-router-dom";
import {BsArrowLeft} from 'react-icons/bs'

const BackButton = ({destination = '/'}) => {
    return (    
        <div>
            <Link to={destination}>
                <BsArrowLeft className='inline-block text-2xl text-blue-500 hover:text-blue-700 cursor-pointer' />
            </Link>
        </div>
    );
};

export default BackButton;