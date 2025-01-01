import {Link} from "react-router-dom";
import cv from '../../../assets/cv/Cv cornet benjamin Portfolio.pdf';
import arrowCV from './../../../assets/icons/up-right-arrow.png';

const NavButtonCV = () => {
    return (
        <div className="relative inline-block font-poppins">
            <Link to={cv} target="_blank" title="CV Cornet Benjamin">
                <input
                    type="button"
                    value="CV"
                    className="bg-main border-text border-2 rounded-3xl hover:bg-text text-white font-bold py-2 px-10 pr-12 transition-colors cursor-pointer relative z-10 hover:drop-shadow-img hover:shadow-text hover:transition-all"
                />
                <img
                    src={arrowCV}
                    alt="Arrow"
                    className="w-6 h-6 absolute right-3 top-1/2 transform -translate-y-1/2 z-50 cursor-default pointer-events-none"
                />
            </Link>
        </div>
    );
}

export default NavButtonCV;
