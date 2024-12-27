/* Types */
import {SkillsDescriptionSectionData} from "../../../types/SkillsDescriptionSectionData.ts";

/* Imports */
import {Link} from "react-router-dom";

/* Css */
import './../../HeroSection/HeroSectionImage/HerSectionImage.css'

const SkillsSectionDescription = ({
                                      title_section,
                                      proposition_1,
                                      proposition_2,
                                      text_1,
                                      text_2,
                                      text_3,
                                      text_4,
                                      button_text
                                  }: SkillsDescriptionSectionData) => {
    return (
        <div className="flex flex-col w-124">
            <span className="text-text font-semibold text-lg tracking-[0.5em]">{title_section}</span>
            <div className="flex flex-row items-center"><p
                className="font-semibold inline-block text-5xl">{proposition_1}</p><p
                className="text-text font-semibold ml-2 inline-block text-5xl">{proposition_2}</p></div>
            <hr className="w-20 mt-8 border-text"/>
            <h2 className="mt-8 text-gray-300">{text_1}</h2>
            <span className="mt-4 text-gray-300">
                {text_2}
            </span>
            <span className="mt-4 text-gray-300">
                {text_3}
            </span>
            <span className="mt-4 text-gray-300">
                {text_4}
            </span>
            <Link to="/skills"
                  className="mt-8 px-4 py-2 bg-[#00d8e6] w-60 text-white rounded text-center pulse-animation">{button_text}</Link>
        </div>
    );
};

export default SkillsSectionDescription;