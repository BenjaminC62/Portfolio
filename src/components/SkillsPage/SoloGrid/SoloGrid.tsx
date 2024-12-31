/* Types */
import {SkillsData} from "../../../types/SkillsData.ts";

const SoloGrid = ({name, image}: SkillsData) => {
    return (
        <div className="relative p-4 flex flex-col justify-center items-center">
            <div className="absolute inset-0 bg-[#1a1a1a] opacity-50"></div>
            <img
                src={image}
                alt={`${name} Icon`}
                className="z-50 w-32 h-32"
                loading="lazy"
            />
            <span className="mt-4 font-semibold z-10">{name}</span>
        </div>
    );
};

export default SoloGrid;

