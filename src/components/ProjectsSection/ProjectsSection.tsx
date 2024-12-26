import ProjectsNav from "./ProjectsNav/ProjectsNav.tsx";
import ProjectsGridSingle from "./ProjectsGridSingle/ProjectsGridSingle.tsx";
import projectData from './ProjectsSection.json';
import adventura from './../../assets/projects-images/Adventura.png'
import ContactPart from "../Contact/ContactPart.tsx";

const ProjectsSection = () => {
    return (
        <div>
            <ProjectsNav/>
            <div className="flex flex-row justify-between w-full">
                <ProjectsGridSingle image={adventura} link={projectData.projet_1.link}
                                    title={projectData.projet_1.title}/>
                <ProjectsGridSingle image={projectData.projet_1.image} link={projectData.projet_1.link}
                                    title={projectData.projet_1.title}/>
                <ProjectsGridSingle image={projectData.projet_1.image} link={projectData.projet_1.link}
                                    title={projectData.projet_1.title}/>
            </div>
            <ContactPart/>

        </div>
    );
};

export default ProjectsSection;