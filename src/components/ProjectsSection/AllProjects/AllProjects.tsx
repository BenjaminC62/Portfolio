import {projects} from '../projectsData.tsx';
import ProjectsGridSingle from '../ProjectsGridSingle/ProjectsGridSingle';
import {useTranslation} from "react-i18next";

/* Types */
type Project = {
    button_text: string;
};

const AllProjects = () => {
    const {t} = useTranslation();

    const pro = t('allProjects.projects', {returnObjects: true}) as Project[];

    return (
        <div className="flex flex-col items-center min-h-screen text-white py-8">
            <h1 className="text-5xl font-extrabold mb-8 font-poppins text-transparent bg-clip-text bg-gradient-to-r from-[#00FFEE] to-[#2575fc] tracking-wide uppercase shadow-lg animate-gradientText hover:scale-105 hover:shadow-xl transition-all duration-500 ease-in-out">
                {t("allProjects.title")}
            </h1>
            <div className="grid grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <ProjectsGridSingle
                        key={index}
                        image={project.image}
                        button_text={pro[index].button_text}
                        title={project.title}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    );
};

export default AllProjects;
