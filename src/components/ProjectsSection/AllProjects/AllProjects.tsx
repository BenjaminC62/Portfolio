/* Imports */
import ProjectsGridSingle from "../ProjectsGridSingle/ProjectsGridSingle.tsx";

/* Images */
import adventura from './../../../assets/projects-images/Adventura.png'
import bomberman from './../../../assets/projects-images/BombermanProject.png'
import roseSpa from './../../../assets/projects-images/RoseQuartzSpa.png'
import AmazonJuste from './../../../assets/projects-images/Amazon Juste Prix.jpg'
import LBIRD from './../../../assets/projects-images/LBIRD.png'
import LensJudge from '../../../assets/projects-images/LensJudge.png'

const AllProjects = () => {
    const projects = [
        {
            description: "Description 1",
            image: adventura,
            button_text: "View Project",
            title: "Adventura",
            link: "/project1"
        },
        {
            description: "Description 2",
            image: bomberman,
            button_text: "View Project",
            title: "Bomberman",
            link: "/project2"
        },
        {
            description: "Description 2",
            image: roseSpa,
            button_text: "View Project",
            title: "RoseQuartz-Spa",
            link: "/project2"
        },

        {
            description: "Description 2",
            image: AmazonJuste,
            button_text: "View Project",
            title: "Amazon-Juste-Prix",
            link: "/project2"
        },

        {
            description: "Description 2",
            image: LBIRD,
            button_text: "View Project",
            title: "L-BIRD",
            link: "/project2"
        },

        {
            description: "Description 2",
            image: LensJudge,
            button_text: "View Project",
            title: "LensJudge",
            link: "/project2"
        },
    ];

    return (
        <div className="flex flex-col items-center min-h-screen text-white py-8">
            <h1 className="text-5xl font-extrabold mb-8 font-poppins text-transparent bg-clip-text bg-gradient-to-r from-[#00FFEE] to-[#2575fc] tracking-wide uppercase shadow-lg animate-gradientText hover:scale-105 hover:shadow-xl transition-all duration-500 ease-in-out">
                My Projects
            </h1>
            <div className="grid grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <ProjectsGridSingle key={index} description={project.description}
                                        image={project.image} button_text={project.button_text} title={project.title}
                                        link={project.title}/>
                ))}
            </div>
        </div>
    );
};

export default AllProjects;