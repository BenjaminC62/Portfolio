import React, {useEffect, useRef} from 'react';
import {NavbarProps} from '../../types';
import {Link} from 'react-router-dom';
import HeroSectionLinks from './LinksNavBar/NavBarLinks';
import NavButtonCV from './NavButtonCV/NavButtonCV';

const Navbar: React.FC<NavbarProps> = ({name, lastName}) => {
    const [menuOpen, setMenuOpen] = React.useState(false);

    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (menuRef.current) {
            menuRef.current.style.zIndex = '99999';
        }

        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [menuOpen]);


    useEffect(() => {
        if (menuRef.current) {
            menuRef.current.style.zIndex = '99999';
        }
    }, []);

    return (
        <nav className="bg-main">
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
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                            />
                        </svg>
                    </button>
                </div>
            </div>

            <div
                className={`fixed top-0 h-[1000px] left-[-80px] bg-main bg-opacity-70 w-96 !z-50 transform md:hidden lg:hidden xl:hidden 2xl:hidden  ${
                    menuOpen ? 'translate-x-1' : '-translate-x-full'
                } transition-transform duration-300`} ref={menuRef}
            >
                <div
                    className="flex flex-col my-auto items-center justify-center h-full space-y-8 text-center z-[1000]">
                    <HeroSectionLinks/>

                    <NavButtonCV/>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
