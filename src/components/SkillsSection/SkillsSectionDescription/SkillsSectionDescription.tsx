/* Types */
import {SkillsDescriptionSectionData} from "../../../types/SkillsDescriptionSectionData.ts";

/* Imports */
import {HashLink} from 'react-router-hash-link';

/* Css */
import './../../HeroSection/HeroSectionImage/HerSectionImage.css'
import {useTranslation} from "react-i18next";

const SkillsSectionDescription = ({
                                      title_section,
                                      proposition_1,
                                      proposition_2,
                                      text_1,
                                      text_2,
                                      text_3,
                                      text_4,
                                      button_text,
                                  }: SkillsDescriptionSectionData) => {
    const {t} = useTranslation();
    return (
        <div
            className="flex flex-col items-center text-center md:items-start md:text-left w-full md:w-1/2 lg:w-124 space-y-4">
            <span className="text-text font-semibold text-lg tracking-[0.5em]">{t(title_section)}</span>
            <div className="flex flex-row items-center text-2xl md:text-5xl">
                <p className="font-semibold inline-block">{t(proposition_1)}</p>
                <p className="text-text font-semibold ml-2 inline-block">{t(proposition_2)}</p>
            </div>
            <hr className="w-20 mt-4 border-text"/>
            <h2 className="mt-4 text-gray-300 text-sm md:text-base">{t(text_1)}</h2>
            <span className="mt-2 text-gray-300 text-sm md:text-base">{t(text_2)}</span>
            <span className="mt-2 text-gray-300 text-sm md:text-base">{t(text_3)}</span>
            <span className="mt-2 text-gray-300 text-sm md:text-base">{t(text_4)}</span>
            <HashLink
                to="/skills#top"
                className="mt-4 px-4 py-2 bg-[#00d8e6] w-48 text-white rounded text-center pulse-animation"
            >
                {t(button_text)}
            </HashLink>
        </div>
    );
};


export default SkillsSectionDescription;