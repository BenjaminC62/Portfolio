import React from 'react'
import linkedin  from './../../assets/icons/linkedin-icon.png'
import github  from './../../assets/icons/github-icon.png'
import instagram from './../../assets/icons/instagram-icon.png'
import {NavbarProps} from './../../types/navData'



const Navbar: React.FC<NavbarProps> = ({ data }) => {

    return (
        <header className='font-poppins font-bold'>
            <nav>
                <div className='w-full bg-background p-2'>
                    <div className='container mx-auto flex justify-between items-center'>
                        <div className='font-bold text-2xl'>
                            <a href='#' className='text-white'>Cornet</a>
                            <a href='#' className='mx-2 text-text text-shadow-name shadow-text'>Benjamin</a>
                        </div>
                        <div>
                            <ul className='flex text-white'>
                                {data.map((item) => (
                                    <li key={item.id} className='mx-2'><a href={item.link}>{item.title}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div className='flex gap-2'>
                            <a href=''><img src={linkedin} className='w-10 h-10' /></a>
                            <a href=''><img src={github} className='w-10 h-10' /></a>
                            <a href=''><img src={instagram} className='w-10 h-10' /></a>
                        </div>
                    </div>
                    
                </div>
            </nav>
        </header>
    )
}

export default Navbar;
