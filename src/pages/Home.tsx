import {useEffect, useRef} from 'react';

/* Json */
import navData from '../locales/fr/navData.json';
import heroData from '../locales/fr/heroData.json'

/* Components */
import HeroSection from '../components/HeroSection/HeroSection';
import Navbar from '../components/Navbar/Navbar';
import Footer from "../components/Footer/Footer.tsx";
import ScrollIndicator from "../components/ScrollIndicator/ScrollIndicator.tsx";
import SkillsSection from "../components/SkillsSection/SkillsSection.tsx";
import ProjectsSection from "../components/ProjectsSection/ProjectsSection.tsx";


function Home() {
    const lastScrollTopRef = useRef(0);

    useEffect(() => {
        // Restore scroll position
        const savedScrollPosition = sessionStorage.getItem('scrollPosition');
        if (savedScrollPosition) {
            window.scrollTo(0, parseInt(savedScrollPosition, 10));
        }

        const handleScroll = () => {
            const aboutSection = document.querySelector('.about-section');
            const skillsSection = document.querySelector('.skills-section');
            const scrollTop = window.scrollY;

            const aboutOffsetTop = (aboutSection as HTMLElement).offsetTop;
            const aboutHeight = (aboutSection as HTMLElement).offsetHeight;
            const skillsOffsetTop = (skillsSection as HTMLElement).offsetTop;
            const skillsHeight = (skillsSection as HTMLElement).offsetHeight;

            const direction = scrollTop > lastScrollTopRef.current ? 'down' : 'up';
            lastScrollTopRef.current = scrollTop;

            if ((scrollTop >= aboutOffsetTop && scrollTop < aboutOffsetTop + aboutHeight) ||
                (scrollTop >= skillsOffsetTop && scrollTop < skillsOffsetTop + skillsHeight)) {
                document.documentElement.style.scrollSnapType = 'none';
            } else if (scrollTop < aboutOffsetTop && direction === 'up') {
                document.documentElement.style.scrollSnapType = 'y mandatory';
            } else {
                document.documentElement.style.scrollSnapType = 'y mandatory';
            }
            // Save scroll position
            sessionStorage.setItem('scrollPosition', scrollTop.toString());
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <main className="text-white font-poppins">
                <section className="container mx-auto " id="scroll-section">
                    <div className="mt-8 text-background invisible">space</div>
                    <Navbar data={navData.navList} name={navData.name} lastName={navData.lastName}
                            firstPage={navData.firstPage} homeIcon={navData.homeIcon}/>
                    <HeroSection nom={heroData.nom} prenom={heroData.prenom} subtitle={heroData.subtitle}
                                 description={heroData.description}/>
                </section>
                <ScrollIndicator/>
                <section className="container mx-auto mt-40 about-section" id="scroll-section">
                    <SkillsSection/>
                </section>
                <section className="container mx-auto skills-section" id="scroll-section">
                    <ProjectsSection/>
                </section>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    );
}

export default Home;