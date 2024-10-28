import React from 'react'

import {NavbarProps} from '../../types/index'
import { Link } from 'react-router-dom';

const Navbar: React.FC<NavbarProps> = ({ data , name, firstPage, lastName})  => {

    return (
        <header className='font-poppins font-semibold '>
            <nav>
                <div className='w-full bg-background p-6 backdrop-blur'>
                    <div className='container mx-auto flex justify-between items-center'>
                        <div className='font-bold text-2xl'>
                            <Link to="/" className='text-white'>{name}</Link>
                            <Link to="/" className='mx-2 text-text text-shadow-name shadow-text'>{lastName}</Link>
                        </div>
                        <div>
                            <ul className='flex text-white gap-4 text-xl'>
                                <li className='mx-2 text-text font-bold underline'><a href='#'>{firstPage}</a></li>
                                {data.map((item) => (
                                    <li key={item.id} className='mx-2 hover:text-text hover:transition-all '><Link to={item.link} >{item.title}</Link></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;
