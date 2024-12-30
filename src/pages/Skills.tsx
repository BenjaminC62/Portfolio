import Navbar from "../components/Navbar/Navbar.tsx";
import navData from "../locales/fr/navData.json";
import Footer from "../components/Footer/Footer.tsx";
import SkillsGrid from "../components/SkillsPage/SkillsGrid.tsx";


/**
 * The main part where the skills are displayed
 *
 * @returns
 */
const Skills = () => {
    return (
        <div id="top" className="flex flex-col min-h-screen">
            <header className="mt-4 mx-auto container">
                <Navbar data={navData.navList} name={navData.name} lastName={navData.lastName}
                        firstPage={navData.firstPage} homeIcon={navData.homeIcon}/>
            </header>
            <main className="flex-grow">
                <SkillsGrid/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}

export default Skills
