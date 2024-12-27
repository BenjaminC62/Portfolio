/* Json */
import skillsData from './SkillsSectionGrid/SkillsSectionGrid.json';

/* Components */
import SkillsSectionGrid from "./SkillsSectionGrid/SkillsSectionGrid.tsx";
import SkillsSectionDescription from "./SkillsSectionDescription/SkillsSectionDescription.tsx";

const SkillsSection = () => {
    return (
        <div className="flex flex-row justify-between items-center min-h-screen">
            <SkillsSectionDescription/>
            <SkillsSectionGrid cat1={skillsData.cat1} cat1_desc={skillsData.cat1_desc} cat2={skillsData.cat2}
                               cat2_desc={skillsData.cat2_desc} cat3={skillsData.cat3} cat3_desc={skillsData.cat3_desc}
                               cat4={skillsData.cat4} cat4_desc={skillsData.cat4_desc}/>
        </div>
    );
};

export default SkillsSection;