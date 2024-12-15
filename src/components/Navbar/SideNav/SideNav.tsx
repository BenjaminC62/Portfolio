import React, {useState} from "react";
import {Link} from "react-router-dom";
import {NavbarProps} from "../../../types/navData";

const SideNav: React.FC<NavbarProps> = ({data, firstPage, homeIcon}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-0 right-5 transform -translate-y-1/2 z-50 bg-gray-800 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
            >
                <span className="text-xl">☰</span>
            </button>

            {isOpen && (
                <div
                    className="fixed top-1/2 right-0 transform -translate-y-1/2 z-40 bg-gray-800 bg-opacity-90 rounded-lg p-4 pt-12 pb-12 mr-9">
                    <ul className="flex flex-col text-white gap-4 text-xl">
                        <li className="mx-2 text-text font-bold underline text-center">
                            <Link to="/">
                                <img src={homeIcon} alt={firstPage}/>
                            </Link>
                        </li>
                        {data.map((item) => (
                            <li
                                key={item.id}
                                className="mx-auto hover:text-text transition-all mt-8"
                            >
                                <Link to={item.link}>
                                    <img src={item.image} alt={item.title}/>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SideNav;
