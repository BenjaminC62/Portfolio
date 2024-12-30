/* Components */
import SkillsSectionGrid from "./SkillsSectionGrid/SkillsSectionGrid.tsx";
import SkillsSectionDescription from "./SkillsSectionDescription/SkillsSectionDescription.tsx";

const SkillsSection = () => {
    return (
        <div className="flex flex-row justify-between items-center min-h-screen">
            <SkillsSectionDescription title_section="skillsDesc.title_section"
                                      proposition_1="skillsDesc.proposition_1"
                                      proposition_2="skillsDesc.proposition_2" text_1="skillsDesc.text_1"
                                      text_2="skillsDesc.text_2" text_3="skillsDesc.text_3"
                                      text_4="skillsDesc.text_4" button_text="skillsDesc.button_text"/>
            <SkillsSectionGrid cat1="skillsGrid.cat1" cat1_desc="skillsGrid.cat1_desc" cat2="skillsGrid.cat2"
                               cat2_desc="skillsGrid.cat2_desc" cat3="skillsGrid.cat3" cat3_desc="skillsGrid.cat3_desc"
                               cat4="skillsGrid.cat4" cat4_desc="skillsGrid.cat4_desc"/>
        </div>
    );
};

export default SkillsSection;