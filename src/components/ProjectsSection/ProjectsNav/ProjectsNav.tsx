/* Types */
import {ProjectsNavSectionData} from "../../../types/ProjectsSectionData.ts";

/* Imports */
import {Link} from "react-router-dom";

/* CSS */
import './../../HeroSection/HeroSectionImage/HerSectionImage.css'

const ProjectsNav = ({title_section, recent_projects_1, recent_projects_2, button_text}: ProjectsNavSectionData) => {
    return (
        <div className="flex flex-row justify-between items-center">
            <div>
                <span className="text-text font-semibold text-lg tracking-[0.5em]">{title_section}</span>
                <div className="flex flex-row items-center"><p
                    className="font-semibold inline-block text-5xl">{recent_projects_1}</p><p
                    className="text-text font-semibold ml-2 inline-block text-5xl">{recent_projects_2}</p></div>
                <hr className="w-20 mt-8 border-text"/>
            </div>
            <div>
                <Link to="/projects" className="bg-[#00d8e6] px-8 py-2 rounded pulse-animation">{button_text}</Link>
            </div>
        </div>

    );
};

export default ProjectsNav;