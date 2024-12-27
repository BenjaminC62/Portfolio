/* Json */
import projectData from './ProjectsGridSingle/ProjectsGridSingle.json'
import projectsNavData from './ProjectsNav/ProjectsNav.json'

/* Components */
import ProjectsNav from "./ProjectsNav/ProjectsNav.tsx";
import ProjectsGridSingle from "./ProjectsGridSingle/ProjectsGridSingle.tsx";
import ContactPart from "../Contact/ContactPart.tsx";

/* Images */
import adventura from './../../assets/projects-images/Adventura.png'
import bomberman from './../../assets/projects-images/BombermanProject.png'
import rosequartzspa from './../../assets/projects-images/RoseQuartzSpa.png'


const ProjectsSection = () => {
    return (
        <div>
            <ProjectsNav title_section={projectsNavData.title_section}
                         recent_projects_1={projectsNavData.recent_projects_1}
                         recent_projects_2={projectsNavData.recent_projects_2}
                         button_text={projectsNavData.button_text}/>
            <div className="flex flex-row justify-between w-full">
                <ProjectsGridSingle image={adventura} link={projectData.projet_1.link}
                                    title={projectData.projet_1.title} button_text={projectData.button_text}/>
                <ProjectsGridSingle image={bomberman} link={projectData.projet_2.link}
                                    title={projectData.projet_2.title} button_text={projectData.button_text}/>
                <ProjectsGridSingle image={rosequartzspa} link={projectData.projet_3.link}
                                    title={projectData.projet_3.title} button_text={projectData.button_text}/>
            </div>
            <ContactPart/>

        </div>
    );
};

export default ProjectsSection;