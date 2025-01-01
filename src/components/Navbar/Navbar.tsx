import React from 'react';
import {NavbarProps} from '../../types';
import {Link} from 'react-router-dom';
import HeroSectionLinks from './LinksNavBar/NavBarLinks';
import NavButtonCV from './NavButtonCV/NavButtonCV';

const Navbar: React.FC<NavbarProps> = ({name, lastName}) => {
    return (
        <nav className="bg-main backdrop-blur">
            <div className="container mx-auto flex flex-wrap justify-between items-center">
                <div className="flex items-center">
                    <Link to="/" className="text-white font-bold text-2xl md:text-4xl">
                        {name}
                    </Link>
                    <Link to="/" className="mx-2 text-text text-shadow-name shadow-text font-bold text-2xl md:text-4xl">
                        {lastName}
                    </Link>
                </div>

                <div className="hidden md:flex items-center space-x-6">
                    <HeroSectionLinks/>
                    <NavButtonCV/>
                </div>


                <div className="md:hidden">
                    <button
                        className="text-white focus:outline-none"
                        aria-label="Toggle navigation"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
