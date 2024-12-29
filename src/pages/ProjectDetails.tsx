import {useParams} from 'react-router-dom';
import {projects} from './../components/ProjectsSection/projectsData.ts';
import Navbar from "../components/Navbar/Navbar.tsx";
import navData from "../components/Navbar/navData.json";
import Footer from "../components/Footer/Footer.tsx";

const ProjectDetails = () => {
    const {title} = useParams<{ title: string }>();
    const project = projects.find((p) => p.title === title);

    if (!project) {
        return <div className="text-center text-white">Project not found.</div>;
    }

    return (
        <div className="flex flex-col min-h-screen">
            <header className="mt-4 mx-auto container">
                <Navbar data={navData.navList} name={navData.name} lastName={navData.lastName}
                        firstPage={navData.firstPage} homeIcon={navData.homeIcon}/>
            </header>
            <main className="flex-grow flex flex-col items-center text-white py-16 px-8">
                <div className="max-w-6xl w-full flex flex-col lg:flex-row items-start gap-12">
                    {/* Image du projet */}
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full lg:w-1/2 h-auto object-cover rounded-lg shadow-lg"
                    />

                    {/* Informations du projet */}
                    <div className="flex flex-col items-start lg:w-1/2">
                        <h1 className="text-5xl font-bold text-[#00FFEE] mb-4">{project.title}</h1>
                        <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#00FFEE] underline mb-4"
                        >
                            View on GitHub
                        </a>
                        <p className="text-gray-400 mb-4">
                            <strong>Time Taken:</strong> {project.timeTaken}
                        </p>
                        <p className="text-lg text-gray-300 leading-relaxed mb-6">
                            {project.intro}
                        </p>
                        <button
                            onClick={() => window.history.back()}
                            className="px-6 py-2 rounded bg-[#00FFEE] text-black font-semibold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300"
                        >
                            Go Back
                        </button>
                    </div>
                </div>

                {/* Description détaillée */}
                <div className="mt-12 max-w-6xl w-full">
                    <h2 className="text-3xl font-bold text-[#00FFEE] mb-6">Project Details</h2>
                    <p className="text-lg text-gray-300 leading-relaxed mb-8">
                        {project.description}
                    </p>

                    {/* Images supplémentaires */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {project.additionalImages.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Project Detail ${index + 1}`}
                                className="w-full h-auto object-cover rounded-lg shadow-lg"
                            />
                        ))}
                    </div>
                </div>
            </main>


            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default ProjectDetails;
