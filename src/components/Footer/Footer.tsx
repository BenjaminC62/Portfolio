import NavBarLinks from "../Navbar/LinksNavBar/NavBarLinks.tsx";
import NavButtonCV from "../Navbar/NavButtonCV/NavButtonCV.tsx";
import navImage from './../Navbar/NavButtonCV/navImageArrow.json';

const Footer = () => {
    return (
        <footer className="bg-background text-white py-4 mt-8">
            <div className="flex justify-between items-center">
                <div className="ml-4">
                    <NavBarLinks/>
                </div>
                <p className="text-center">&copy; {new Date().getFullYear()} Cornet Benjamin. All rights reserved.</p>
                <NavButtonCV upArrow={navImage.arrow}/>
            </div>

        </footer>
    );
};

export default Footer;
