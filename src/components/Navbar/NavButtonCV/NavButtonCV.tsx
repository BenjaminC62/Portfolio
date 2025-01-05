import {Link} from "react-router-dom";
import cvFR from '../../../assets/cv/CV Cornet Benjamin.pdf';
import cvEN from '../../../assets/cv/CV Cornet Benjamin EN.pdf';
import arrowCV from './../../../assets/icons/up-right-arrow.png';
import {useTranslation} from "react-i18next";

const NavButtonCV = () => {
    const {i18n} = useTranslation();
    const cv = i18n.language === 'en' ? cvEN : cvFR;
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
