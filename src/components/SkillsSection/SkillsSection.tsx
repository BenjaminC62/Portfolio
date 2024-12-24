import SkillsSectionGrid from "./SkillsSectionGrid/SkillsSectionGrid.tsx";
import SkillsSectionDescription from "./SkillsSectionDescription/SkillsSectionDescription.tsx";

const SkillsSection = () => {
    return (
        <div className="flex flex-row justify-between items-center min-h-screen">
            <SkillsSectionDescription/>
            <SkillsSectionGrid/>
        </div>
    );
};

export default SkillsSection;