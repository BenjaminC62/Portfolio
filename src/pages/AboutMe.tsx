import Footer from "../components/Footer/Footer.tsx";
import navData from "../components/Navbar/navData.json";
import Navbar from "../components/Navbar/Navbar.tsx";
import WhoIAm from "../components/AboutPage/WhoIAm/WhoIAm.tsx";
import Experiences from "../components/AboutPage/Experiences/Experiences.tsx";

/**
 * AboutMe component, this is a functional component which talks about me
 *
 * @returns AboutMe component
 */
const AboutMe = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <header className="mt-4 mx-auto container">
                    <Navbar data={navData.navList} name={navData.name} lastName={navData.lastName}
                            firstPage={navData.firstPage} homeIcon={navData.homeIcon}/>
                </header>
                <main className="flex-grow">
                    <WhoIAm/>
                    <Experiences/>
                </main>
                <footer>
                    <Footer/>
                </footer>
            </div>
        </>

    );
}

export default AboutMe;
