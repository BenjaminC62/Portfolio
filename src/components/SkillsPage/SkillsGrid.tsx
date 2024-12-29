import SoloGrid from "./SoloGrid/SoloGrid.tsx";

const SkillsGrid = () => {
    const skills = [
        {name: "JavaScript", image: "/images/javascript.png"},
        {name: "Python", image: "/images/python.png"},
        {name: "Java", image: "/images/java.png"},
        {name: "PHP", image: "/images/php.png"},
        {name: "C++", image: "/images/cpp.png"},
        {name: "HTML", image: "/images/html.png"},
        {name: "CSS", image: "/images/css.png"},
        {name: "React", image: "/images/react.png"},
    ];

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="grid grid-cols-4 gap-8 text-center w-full max-w-[60rem]">
                {skills.map((skill, index) => (
                    <SoloGrid key={index} name={skill.name} image={skill.image}/>
                ))}
            </div>
        </div>
    );
};

export default SkillsGrid;
