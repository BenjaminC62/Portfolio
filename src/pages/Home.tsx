import {useEffect, useRef, useState} from 'react';

/* Json */
import navData from '../locales/fr/navData.json';

/* Components */
import HeroSection from '../components/HeroSection/HeroSection';
import Navbar from '../components/Navbar/Navbar';
import Footer from "../components/Footer/Footer.tsx";
import ScrollIndicator from "../components/ScrollIndicator/ScrollIndicator.tsx";
import SkillsSection from "../components/SkillsSection/SkillsSection.tsx";
import ProjectsSection from "../components/ProjectsSection/ProjectsSection.tsx";

function Home() {
    const lastScrollTopRef = useRef(0);
    const [isLargeScreen, setIsLargeScreen] = useState(true);

    useEffect(() => {
        // Function to handle window resize
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 1281); // Définir la taille de l'écran pour lg (1024px)
        };

        // Appeler handleResize au chargement
        handleResize();

        // Écouter l'événement de redimensionnement
        window.addEventListener('resize', handleResize);

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

            // Vérifie si le scroll est dans une section où le snap doit être désactivé
            if ((scrollTop >= aboutOffsetTop && scrollTop < aboutOffsetTop + aboutHeight) ||
                (scrollTop >= skillsOffsetTop && scrollTop < skillsOffsetTop + skillsHeight)) {
                document.documentElement.style.scrollSnapType = 'none';
                document.body.style.scrollSnapType = 'none'; // Appliquer aussi sur le body
            } else if (scrollTop < aboutOffsetTop && direction === 'up') {
                document.documentElement.style.scrollSnapType = isLargeScreen ? 'y mandatory' : 'none';
                document.body.style.scrollSnapType = isLargeScreen ? 'y mandatory' : 'none';
            } else {
                document.documentElement.style.scrollSnapType = isLargeScreen ? 'y mandatory' : 'none';
                document.body.style.scrollSnapType = isLargeScreen ? 'y mandatory' : 'none';
            }

            // Sauvegarder la position du scroll
            sessionStorage.setItem('scrollPosition', scrollTop.toString());
        };

        // Ajouter l'événement de scroll
        window.addEventListener('scroll', handleScroll);

        // Nettoyage des événements
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [isLargeScreen]);

    return (
        <>
            <div className="flex flex-col min-h-screen">
                <main className="flex-grow text-white font-poppins">
                    <section className="container mx-auto px-4 sm:px-6 lg:px-8" id="scroll-section">
                        <div className="xl:mt-8 text-background invisible">space</div>
                        <Navbar data={navData.navList} name={navData.name} lastName={navData.lastName}
                                firstPage={navData.firstPage} homeIcon={navData.homeIcon}/>
                        <HeroSection nom="hero.nom" description="hero.description" subtitle="hero.subtitle"
                                     prenom="hero.prenom"/>
                    </section>
                    <ScrollIndicator/>
                    <section
                        className="container mx-auto mt-36 md:mt-40  lg:mt-40 about-section px-4 sm:px-6 lg:px-8"
                        id="scroll-section">
                        <SkillsSection/>
                    </section>
                    <section className="container mx-auto skills-section mt-[650px] sm:mt-24 md:mt-[400px] xl:mt-14"
                             id="scroll-section">
                        <ProjectsSection/>
                    </section>
                </main>
                <footer className="mt-[700px] sm:mt-[1000px] md:mt-[1250px] lg:mt-[900px] xl:mt-0">
                    <Footer/>
                </footer>
            </div>
        </>
    );
}

export default Home;
