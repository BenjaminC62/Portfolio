/* Json */
import skillsData from '../../locales/fr/SkillsSectionGrid.json';
import skillsDescData from '../../locales/fr/SkillsSectionDescription.json'

/* Components */
import SkillsSectionGrid from "./SkillsSectionGrid/SkillsSectionGrid.tsx";
import SkillsSectionDescription from "./SkillsSectionDescription/SkillsSectionDescription.tsx";

const SkillsSection = () => {
    return (
        <div className="flex flex-row justify-between items-center min-h-screen">
            <SkillsSectionDescription title_section={skillsDescData.title_section}
                                      proposition_1={skillsDescData.proposition_1}
                                      proposition_2={skillsDescData.proposition_2} text_1={skillsDescData.text_1}
                                      text_2={skillsDescData.text_2} text_3={skillsDescData.text_3}
                                      text_4={skillsDescData.text_4} button_text={skillsDescData.button_text}/>
            <SkillsSectionGrid cat1={skillsData.cat1} cat1_desc={skillsData.cat1_desc} cat2={skillsData.cat2}
                               cat2_desc={skillsData.cat2_desc} cat3={skillsData.cat3} cat3_desc={skillsData.cat3_desc}
                               cat4={skillsData.cat4} cat4_desc={skillsData.cat4_desc}/>
        </div>
    );
};

export default SkillsSection;