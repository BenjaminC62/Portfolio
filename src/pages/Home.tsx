import HeroSection from '../components/HeroSection/HeroSection';
import Navbar from '../components/Navbar/Navbar'
import SideNav from '../components/Navbar/SideNav/SideNav';
import navData from './../components/Navbar/navData.json';
import ScrollIndicator from '../components/ScrollIndicator/ScrollIndicator';
import {AboutSection} from "../components/AboutSection";
import Footer from "../components/Footer/Footer.tsx";
import './../styles/animScroll.css'

/**
 *  Home component, this is a functional component which is the home page of the website
 *
 * @returns
 */
function Home() {
    return (
        <>
            <main className="text-white font-poppins">
                <section className="scroll-section">
                    <SideNav data={navData.navList} name={navData.name} lastName={navData.lastName}
                             firstPage={navData.firstPage} homeIcon={navData.homeIcon}/>
                    <Navbar data={navData.navList} name={navData.name} lastName={navData.lastName}
                            firstPage={navData.firstPage}
                            homeIcon={navData.homeIcon}/>
                    <HeroSection/>
                </section>
                <ScrollIndicator/>
                <section className="scroll-section">
                    <AboutSection/>
                </section>
                {/* Classic scroll */}
            </main>
            <footer>
                <Footer/>
            </footer>
        </>

    )
}

export default Home;
