import React from 'react'

function Navbar() {

    const data = [
        {
            
        }
    ]

    return (
        <header>
            <nav>
                <div className='w-full bg-primary pb-4'>
                    <div className='container mx-auto flex justify-between items-center'>
                        <div className='font-bold text-2xl'>
                            <a href='#' className='text-white'>Cornet</a>
                            <a href='#' className='mx-2 text-text'>Benjamin</a>
                        </div>
                        <div>
                            <ul className='flex text-white'>
                                <li className='mx-2 text-text'><a href='#'>Home</a></li>
                                <li className='mx-2'><a href='#'>About</a></li>
                                <li className='mx-2'><a href='#'>Services</a></li>
                                <li className='mx-2'><a href='#'>Contact</a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;
