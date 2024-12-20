import HeroSection from '../components/HeroSection/HeroSection';
import Navbar from '../components/Navbar/Navbar'
import SideNav from '../components/Navbar/SideNav/SideNav';
import navData from './../components/Navbar/navData.json';
import ScrollIndicator from '../components/ScrollIndicator/ScrollIndicator';
import {AboutSection} from "../components/AboutSection";
import Footer from "../components/Footer/Footer.tsx";


/**
 *  Home component, this is a functional component which is the home page of the website
 *
 * @returns
 */
function Home() {
    return (
        <>
            <header>
                <SideNav data={navData.navList} name={navData.name} lastName={navData.lastName}
                         firstPage={navData.firstPage} homeIcon={navData.homeIcon}/>
                <Navbar data={navData.navList} name={navData.name} lastName={navData.lastName}
                        firstPage={navData.firstPage}
                        homeIcon={navData.homeIcon}/>
            </header>
            <main className="text-white font-poppins">
                <HeroSection/>
                <ScrollIndicator/>
                <AboutSection/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>

    )
}

export default Home;
