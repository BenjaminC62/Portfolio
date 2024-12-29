/* Tpyes */
import {ExperiencesType} from "../../../types/Experiences.ts";

/* Json Data */
import experiences from './Experiences.json';

const Experiences = () => {
    return (
        <section className="container mx-auto my-12 p-8">
            <h2 className="text-4xl font-bold text-gray-300 text-center mb-12 underline decoration-[#00FFEE]">
                Expériences & Formations
            </h2>
            <div className="space-y-8">
                {experiences.map((exp: ExperiencesType, index) => (
                    <div
                        key={index}
                        className="relative group p-6 bg-[#1a1a1a] rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
                    >
                        <div
                            className="absolute inset-0 bg-[#1a1a1a] to-transparent opacity-20 blur-xl group-hover:opacity-40 transition duration-300"
                        ></div>

                        <div className="relative z-10">
                            <h3 className="text-2xl font-semibold text-[#00FFEE] group-hover:text-gray-300">
                                {exp.title}
                            </h3>
                            <p className="text-lg text-gray-300">{exp.company}</p>
                            <p className="text-md text-gray-400 italic">{exp.duration}</p>
                            <p className="text-md text-gray-300 mt-4">{exp.description}</p>
                        </div>

                        <div
                            className="absolute inset-0 border-2 border-transparent rounded-lg group-hover:border-[#00FFEE] transition duration-300"
                        ></div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experiences;
