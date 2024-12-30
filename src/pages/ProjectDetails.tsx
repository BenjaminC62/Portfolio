import {useParams} from 'react-router-dom';
import {projects} from './../components/ProjectsSection/projectsData.ts';
import Navbar from "../components/Navbar/Navbar.tsx";
import navData from "../locales/fr/navData.json";
import Footer from "../components/Footer/Footer.tsx";
import {SetStateAction, useState} from "react";

const ProjectDetails = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const {title} = useParams<{ title: string }>();
    const project = projects.find((p) => p.title === title);

    const openModal = (image: string | SetStateAction<null>) => {
        // @ts-ignore
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    if (!project) {
        return <div className="text-center text-white">Project not found.</div>;
    }

    return (
        <div id="top" className="flex flex-col min-h-screen">
            <header className="mt-4 mx-auto container">
                <Navbar data={navData.navList} name={navData.name} lastName={navData.lastName}
                        firstPage={navData.firstPage} homeIcon={navData.homeIcon}/>
            </header>
            <main className="flex-grow flex flex-col items-center text-white py-16 px-8">
                <div className="max-w-6xl w-full flex flex-col lg:flex-row items-start gap-12">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full lg:w-1/2 h-auto object-cover rounded-lg shadow-lg"
                    />

                    <div className="flex flex-col items-start lg:w-1/2">
                        <div className="flex items-center mb-4">
                            <h1 className="text-5xl font-bold text-[#00FFEE]">{project.title}</h1>
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-4"
                                title="View on GitHub"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="#00FFEE"
                                    className="hover:opacity-80 transition-opacity duration-300"
                                >
                                    <path
                                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </a>
                        </div>
                        <p className="text-gray-400 mb-4">
                            <strong>Durée :</strong> {project.timeTaken}
                        </p>
                        <p className="text-lg text-gray-300 leading-relaxed mb-6">
                            {project.intro}
                        </p>
                        <button
                            onClick={() => window.history.back()}
                            className="px-6 py-2 rounded bg-[#00FFEE] text-black font-semibold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300"
                        >
                            Retourner en arrière
                        </button>
                    </div>
                </div>

                <div className="mt-12 max-w-6xl w-full bg-[#1a1a1a] p-8 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold text-[#00FFEE] mb-6">Détails du projet</h2>
                    <p className="text-lg text-gray-300 leading-relaxed mb-8">
                        {project.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {project.additionalImages.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Project Detail ${index + 1}`}
                                className="w-full h-auto object-cover rounded-lg shadow-lg cursor-pointer"
                                onClick={() => openModal(image)}
                            />
                        ))}
                    </div>

                    {selectedImage && (
                        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
                            <div
                                className="relative max-w-screen-lg max-h-screen p-6 bg-[#1a1a1a] rounded-lg shadow-xl border-4 border-[#00FFEE]">
                                <img
                                    src={selectedImage}
                                    alt="Selected"
                                    className="max-w-full max-h-full object-contain rounded-lg"
                                />
                                <button
                                    onClick={closeModal}
                                    className="absolute top-[-0.7rem] right-0 text-[#00FFEE] text-4xl font-bold hover:text-white transition-all duration-300"
                                >
                                    &times;
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </main>

            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default ProjectDetails;
