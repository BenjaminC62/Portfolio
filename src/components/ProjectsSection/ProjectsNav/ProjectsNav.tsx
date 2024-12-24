import {Link} from "react-router-dom";
import './../../HeroSection/HeroSectionImage/HerSectionImage.css'

const ProjectsNav = () => {
    return (
        <div className="flex flex-row justify-between items-center">
            <div>
                <h1 className="font-semibold text-5xl">Projets en vedette</h1>
                <p className="text-gray-300 text-lg">lorem10</p>
            </div>
            <div>
                <Link to="/projects" className="bg-[#00d8e6] px-8 py-2 rounded pulse-animation">View
                    all</Link>
            </div>
        </div>

    );
};

export default ProjectsNav;