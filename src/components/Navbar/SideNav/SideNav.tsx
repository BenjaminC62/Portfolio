import React, {useState} from "react";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import {NavbarProps} from "../../../types";

const SideNav: React.FC<NavbarProps> = ({data, firstPage, homeIcon}) => {
    const [isOpen, setIsOpen] = useState(false);

    const bubbleVariants = {
        closed: {
            width: "4rem",
            height: "4rem",
            padding: "1rem",
            borderRadius: "50%",
        },
        open: {
            width: "20rem",
            height: "20rem",
            padding: "2rem",
            borderRadius: "1rem",
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
            },
        },
    };

    return (
        <motion.div
            className="fixed bottom-8 right-8 z-50 bg-gray-800 text-white shadow-lg overflow-hidden "
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            variants={bubbleVariants}
            onClick={() => setIsOpen(!isOpen)}
        >

            {!isOpen && (
                <div className="flex items-center justify-center h-full w-full cursor-pointer">
                    <span className="text-xl">☰</span>
                </div>
            )}

            {isOpen && (
                <ul className="flex flex-col items-center gap-4 text-lg">
                    <li className="text-center">
                        <Link to="/">
                            <img
                                src={homeIcon}
                                alt={firstPage}
                                className="w-10 h-10 object-contain"
                            />
                        </Link>
                    </li>
                    {data.map((item) => (
                        <li key={item.id} className="hover:text-gray-300 transition-all">
                            <Link to={item.link}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-10 h-10 object-contain"
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </motion.div>
    );
};

export default SideNav;
