/* Types */
import {SkillsData} from "../../../types/SkillsData.ts";

const SoloGrid = ({name, image}: SkillsData) => {
    return (
        <div className="p-4 flex flex-col justify-center items-center -translate-y-8">
            <div className="absolute inset-0 bg-[#1a1a1a] opacity-50 rounded-lg"></div>
            <img
                src={image}
                alt={`${name} Icon`}
                className="z-50 w-32 h-32"
            />
            <span className="mt-4 font-semibold z-10 text-white">{name}</span>
        </div>
    );
};

export default SoloGrid;
