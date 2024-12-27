/* Types */
/* Json */
import projectData from './ProjectsSection.json';
import projectsNavData from './ProjectsNav/ProjectsNav.json'

/* Components */
import ProjectsNav from "./ProjectsNav/ProjectsNav.tsx";
import ProjectsGridSingle from "./ProjectsGridSingle/ProjectsGridSingle.tsx";
import ContactPart from "../Contact/ContactPart.tsx";

/* Images */
import adventura from './../../assets/projects-images/Adventura.png'


const ProjectsSection = () => {
    return (
        <div>
            <ProjectsNav title_section={projectsNavData.title_section}
                         recent_projects_1={projectsNavData.recent_projects_1}
                         recent_projects_2={projectsNavData.recent_projects_2}
                         button_text={projectsNavData.button_text}/>
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