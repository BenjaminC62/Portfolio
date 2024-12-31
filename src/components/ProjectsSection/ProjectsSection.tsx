/* Json */
import projectData from '../../locales/fr/ProjectsGridSingle.json'

/* Components */
import ProjectsNav from "./ProjectsNav/ProjectsNav.tsx";
import ProjectsGridSingle from "./ProjectsGridSingle/ProjectsGridSingle.tsx";
import ContactPart from "../Contact/ContactPart.tsx";

/* Images */
import adventura from './../../assets/projects-images/Adventura.png'
import bomberman from './../../assets/projects-images/BombermanProject.png'
import rosequartzspa from './../../assets/projects-images/RoseQuartzSpa.png'

/* i18n */


const ProjectsSection = () => {

    return (
        <div id="top">
            <ProjectsNav title_section="projectsNav.title_section"
                         recent_projects_1="projectsNav.recent_projects_1"
                         recent_projects_2="projectsNav.recent_projects_2"
                         button_text="projectsNav.button_text"/>
            <div className="flex flex-col lg:flex-row justify-between w-full">
                <ProjectsGridSingle image={adventura} link={projectData.projet_1.link}
                                    title={projectData.projet_1.title} button_text="projectHome.button_text"/>
                <ProjectsGridSingle image={bomberman} link={projectData.projet_2.link}
                                    title={projectData.projet_2.title} button_text="projectHome.button_text"/>
                <ProjectsGridSingle image={rosequartzspa} link={projectData.projet_3.link}
                                    title={projectData.projet_3.title} button_text="projectHome.button_text"/>
            </div>
            <ContactPart
                title_section="contact.contact.title_section"
                text_contact="contact.contact.text_contact"
                button_text="contact.contact.button_text"
            />
        </div>
    );
};

export default ProjectsSection;