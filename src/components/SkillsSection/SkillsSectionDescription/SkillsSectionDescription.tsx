import {Link} from "react-router-dom";
import './../../HeroSection/HeroSectionImage/HerSectionImage.css'

const SkillsSectionDescription = () => {
    return (
        <div className="flex flex-col w-124">
            <span className="text-text font-semibold text-lg tracking-[0.5em]">My Skills</span>
            <div className="flex flex-row items-center"><p
                className="font-semibold inline-block text-5xl">Quest ce que je</p><p
                className="text-text font-semibold ml-2 inline-block text-5xl"> propose.</p></div>
            <hr className="w-20 mt-8 border-text"/>
            <h2 className="mt-8 text-gray-300">Passionate about Coding and Development</h2>
            <span className="mt-4 text-gray-300">
                With a solid foundation in various programming languages and frameworks, I constantly strive to improve my skills and stay up-to-date with the latest technologies.
            </span>
            <span className="mt-4 text-gray-300">
                From web development to game programming, I enjoy creating innovative solutions that address real-world problems.
            </span>
            <span className="mt-4 text-gray-300">
                Explore my skills below, and discover how I can contribute to your next project!
            </span>
            <Link to="/skills"
                  className="mt-8 px-4 py-2 bg-[#00d8e6] w-44 text-white rounded text-center pulse-animation">Explore My
                Skills</Link>
        </div>
    );
};

export default SkillsSectionDescription;