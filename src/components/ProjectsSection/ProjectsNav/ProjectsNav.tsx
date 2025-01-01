/* Types */
import {ProjectsNavSectionData} from "../../../types/ProjectsSectionData.ts";

/* CSS */
import './../../HeroSection/HeroSectionImage/HerSectionImage.css'
import {HashLink} from "react-router-hash-link";
import {useTranslation} from "react-i18next";

const ProjectsNav = ({title_section, recent_projects_1, recent_projects_2, button_text}: ProjectsNavSectionData) => {
    const {t} = useTranslation();

    return (
        <div
            className="flex flex-col justify-center items-center text-center md:text-left md:flex md:flex-row md:justify-between md:items-center">
            <div>
                <span className="text-text font-semibold text-lg tracking-[0.5em]">{t(title_section)}</span>
                <div className="flex flex-row items-center"><p
                    className="font-semibold inline-block text-2xl md:text-3xl lg:text-5xl">{t(recent_projects_1)}</p><p
                    className="text-text font-semibold ml-2 inline-block text-2xl md:text-3xl lg:text-5xl">{t(recent_projects_2)}</p>
                </div>
                <hr className=" mt-8 mb-8 w-20 mx-auto border-text md:mx-0 md:w-20 md:mt-8 md:border-text"/>
            </div>
            <div>
                <HashLink to="/projects#top"
                          className="bg-[#00d8e6] px-8 py-2 rounded pulse-animation">{t(button_text)}</HashLink>
            </div>
        </div>

    );
};

export default ProjectsNav;