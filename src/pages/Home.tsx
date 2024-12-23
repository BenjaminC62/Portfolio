import HeroSection from '../components/HeroSection/HeroSection';
import Navbar from '../components/Navbar/Navbar'
import SideNav from '../components/Navbar/SideNav/SideNav';
import navData from './../components/Navbar/navData.json';
import Footer from "../components/Footer/Footer.tsx";
import ScrollIndicator from "../components/ScrollIndicator/ScrollIndicator.tsx";
import {useEffect} from "react";
import Skills from "./Skills.tsx";

/**
 *  Home component, this is a functional component which is the home page of the website
 *
 * @returns
 */
function Home() {
    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.querySelector('.about-section');
            const scrollTop = window.scrollY;
            // @ts-ignore
            const aboutOffsetTop = aboutSection.offsetTop;
            // @ts-ignore
            const aboutHeight = aboutSection.offsetHeight;

            if (scrollTop >= aboutOffsetTop && scrollTop < aboutOffsetTop + aboutHeight) {
                document.documentElement.classList.add('no-scroll-snap');
            } else {
                document.documentElement.classList.remove('no-scroll-snap');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <>
            <header>
                <SideNav data={navData.navList} name={navData.name} lastName={navData.lastName}
                         firstPage={navData.firstPage} homeIcon={navData.homeIcon}/>

            </header>
            <main className="text-white font-poppins">
                <section className="container mx-auto" id="scroll-section">
                    {/*This is a hack to make the scroll-snap work*/}
                    <div className="mt-8 text-background invisible">space</div>
                    <Navbar data={navData.navList} name={navData.name} lastName={navData.lastName}
                            firstPage={navData.firstPage}
                            homeIcon={navData.homeIcon}/>
                    <HeroSection/>
                </section>
                <ScrollIndicator/>
                <section className="container mx-auto m-40 about-section" id="scroll-section">
                    <Skills/>
                </section>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>

    )
}

export default Home;
