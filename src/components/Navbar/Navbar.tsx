import React from 'react'

import {NavbarProps} from '../../types/index'
import { Link } from 'react-router-dom';
import HeroSectionLinks from './LinksNavBar/NavBarLinks';

const Navbar: React.FC<NavbarProps> = ({ name, lastName})  => {

    return (
        <header className='font-poppins font-semibold '>
            <nav>
                <div className='w-full bg-main p-6 backdrop-blur'>
                    <div className='container mx-auto flex justify-between items-center'>
                        <div className='font-bold text-4xl'>
                            <Link to="/" className='text-white'>{name}</Link>
                            <Link to="/" className='mx-2 text-text text-shadow-name shadow-text'>{lastName}</Link>
                        </div>
                        <div>
                            <HeroSectionLinks />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;
