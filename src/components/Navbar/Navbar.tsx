import React from 'react'

import {NavbarProps} from '../../types/index'



const Navbar: React.FC<NavbarProps> = ({ data }) => {

    return (
        <header className='font-poppins font-semibold backdrop-blur'>
            <nav>
                <div className='w-full bg-background p-6'>
                    <div className='container mx-auto flex justify-between items-center'>
                        <div className='font-bold text-2xl'>
                            <a href='#' className='text-white'>Cornet</a>
                            <a href='#' className='mx-2 text-text text-shadow-name shadow-text'>Benjamin</a>
                        </div>
                        <div>
                            <ul className='flex text-white gap-4 text-xl'>
                                <li className='mx-2 text-text font-bold underline'><a href='#'>About me</a></li>
                                {data.map((item) => (
                                    <li key={item.id} className='mx-2 hover:text-text hover:underline hover:transition-all '><a href={item.link}>{item.title}</a></li>
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
