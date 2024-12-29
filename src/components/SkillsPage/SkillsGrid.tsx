/* CSS */
import './../../styles/animText.css';

/* Components */
import SoloGrid from "./SoloGrid/SoloGrid.tsx";

/* Images */
import js from './../../assets/icons-skills/js.png';
import html from './../../assets/icons-skills/html.png';
import css from './../../assets/icons-skills/css.png';
import Tailwind from './../../assets/icons-skills/Tailwind.png';
import React from './../../assets/icons-skills/React.png';
import typescript from './../../assets/icons-skills/typescript.png';
import Java from './../../assets/icons-skills/Java.png';
import Python from './../../assets/icons-skills/Python.png';
import Php from './../../assets/icons-skills/Php.png';
import MySql from './../../assets/icons-skills/MySql.png';
import SQlite from './../../assets/icons-skills/SQlite.png';
import postgre from './../../assets/icons-skills/postgre.png';
import Git from './../../assets/icons-skills/Git.png';
import VsCode from './../../assets/icons-skills/VsCode.png';
import Laravel from './../../assets/icons-skills/Laravel.png';
import Jetbrain from './../../assets/icons-skills/Jetbrain.png';


const SkillsGrid = () => {
    const categories = [
        {
            title: "Web Development",
            skills: [
                {name: "HTML", image: html},
                {name: "CSS", image: css},
                {name: "JavaScript", image: js},
                {name: "React", image: React},
                {name: "TypeScript", image: typescript}
            ],
        },
        {
            title: "Application Development",
            skills: [
                {name: "Java", image: Java},
                {name: "Python", image: Python},
                {name: "PHP", image: Php},
            ],
        },
        {
            title: "Databases",
            skills: [
                {name: "MySQL", image: MySql},
                {name: "SQLite", image: SQlite},
                {name: "PostgreSQL", image: postgre},
            ],
        },
        {
            title: "Tools",
            skills: [
                {name: "Git", image: Git},
                {name: "VS Code", image: VsCode},
                {name: "Jetbrain", image: Jetbrain},
            ],
        },
        {
            title: "Frameworks",
            skills: [
                {name: "TailWind", image: Tailwind},
                {name: "Laravel", image: Laravel},
            ],
        },
    ];

    return (
        <div className="flex flex-col items-center min-h-screen text-white py-8">
            <h1 className="text-5xl font-extrabold mb-8 font-poppins text-transparent bg-clip-text bg-gradient-to-r from-[#00FFEE] to-[#2575fc] tracking-wide uppercase shadow-lg animate-gradientText hover:scale-105 hover:shadow-xl transition-all duration-500 ease-in-out">
                My Skills
            </h1>
            {categories.map((category, index) => (
                <div key={index} className="mb-12 w-full max-w-[80rem]">
                    <h2 className="text-2xl font-semibold mb-6 text-center">{category.title}</h2>
                    <div className="grid grid-cols-4 gap-8">
                        {category.skills.map((skill, idx) => (
                            <SoloGrid key={idx} name={skill.name} image={skill.image}/>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SkillsGrid;
