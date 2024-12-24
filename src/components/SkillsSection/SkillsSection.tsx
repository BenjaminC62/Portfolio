import SkillsSectionGrid from "./SkillsSectionGrid/SkillsSectionGrid.tsx";

const SkillsSection = () => {
    return (
        <div className="flex flex-row justify-between items-center min-h-screen">
            <h1 className="text-4xl font-bold">Skills</h1>
            <SkillsSectionGrid/>
        </div>
    );
};

export default SkillsSection;