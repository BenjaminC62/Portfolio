import Footer from "../components/Footer/Footer.tsx";
import navData from "../locales/fr/navData.json";
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
                    <WhoIAm nom='whoIAm.nom' title="whoIAm.title" adresse="whoIAm.adresse" bio="whoIAm.bio"
                            date="whoIAm.date" letter="whoIAm.letter" tel="whoIAm.tel" adress_list='whoIAm.adress_list'
                            date_list="whoIAm.date_list" name_list="whoIAm.name_list" tel_list="whoIAm.tel_list"/>
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
