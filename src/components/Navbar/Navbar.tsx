import React from 'react'

import {NavbarProps} from '../../types'
import {Link} from 'react-router-dom';
import HeroSectionLinks from './LinksNavBar/NavBarLinks';
import NavButtonCV from './NavButtonCV/NavButtonCV';
import navImage from '../../locales/fr/navImageArrow.json';
import {useTranslation} from "react-i18next";

const Navbar: React.FC<NavbarProps> = ({name, lastName}) => {
    const {i18n} = useTranslation();

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang); // Change la langue de l'application
    };

    return (
        <>
            <nav>
                <div className='bg-main backdrop-blur'>
                    <div className='mx-auto flex justify-between items-center'>
                        <div className='font-bold text-4xl'>
                            <Link to="/" className='text-white'>{name}</Link>
                            <Link to="/" className='mx-2 text-text text-shadow-name shadow-text'>{lastName}</Link>
                        </div>
                        <div className='flex'>
                            <HeroSectionLinks/>
                            <NavButtonCV upArrow={navImage.arrow}/>
                            {/* Boutons pour changer la langue */}
                            <button onClick={() => changeLanguage('en')} className="text-white mx-2">
                                English
                            </button>
                            <button onClick={() => changeLanguage('fr')} className="text-white mx-2">
                                Français
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
