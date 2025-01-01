import NavBarLinks from "../Navbar/LinksNavBar/NavBarLinks.tsx";
import NavButtonCV from "../Navbar/NavButtonCV/NavButtonCV.tsx";

const Footer = () => {
    return (
        <footer className="bg-background text-white py-6 md:mt-12">
            <div
                className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 px-4">
                <div className="w-full md:w-auto text-center md:text-left">
                    <NavBarLinks/>
                </div>

                <p className="text-sm md:text-base text-center">
                    &copy; {new Date().getFullYear()} Cornet Benjamin. All rights reserved.
                </p>

                <div className="w-full md:w-auto text-center md:text-right">
                    <NavButtonCV/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
