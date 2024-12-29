import React from 'react'

import {NavbarProps} from '../../types'
import {Link} from 'react-router-dom';
import HeroSectionLinks from './LinksNavBar/NavBarLinks';
import NavButtonCV from './NavButtonCV/NavButtonCV';
import navImage from './../Navbar/NavButtonCV/navImageArrow.json';

const Navbar: React.FC<NavbarProps> = ({name, lastName}) => {

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
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
