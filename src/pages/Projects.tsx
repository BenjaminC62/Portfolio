import Navbar from "../components/Navbar/Navbar.tsx";
import navData from "../components/Navbar/navData.json";
import Footer from "../components/Footer/Footer.tsx";
import AllProjects from "../components/ProjectsSection/AllProjects/AllProjects.tsx";

/**
 *  My Projects Page, where I showcase my projects
 *
 * @returns
 */
const Projects = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <header className="mt-4 mx-auto container">
                    <Navbar data={navData.navList} name={navData.name} lastName={navData.lastName}
                            firstPage={navData.firstPage} homeIcon={navData.homeIcon}/>
                </header>
                <main className="flex-grow">
                    <AllProjects/>
                </main>
                <footer>
                    <Footer/>
                </footer>
            </div>
        </>
    )
}

export default Projects
