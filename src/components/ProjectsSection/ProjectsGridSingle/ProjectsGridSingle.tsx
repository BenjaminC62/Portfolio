/* Types */
import {dateProjectsItems} from "./../../../types/ProjecsSectionsData.ts";
import {HashLink} from "react-router-hash-link";
import {useTranslation} from "react-i18next";

const ProjectsGridSingle = ({image, title, link, button_text}: dateProjectsItems) => {
    const {t} = useTranslation();

    return (
        <div
            className="bg-[#1a1a1a] rounded-lg flex flex-col justify-between items-center p-4 mt-16"
            style={{width: "31rem", height: "24rem"}}
        >
            <div
                className="rounded-md overflow-hidden"
                style={{
                    width: "29rem",
                    height: "18rem",
                    boxShadow: "10px 15px 30px rgba(0, 0, 0, 0.5)",
                }}
            >
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>

            <p className="font-semibold text-xl mt-4 text-center">{title}</p>

            <div className="flex items-center space-x-2 mt-2">
                <HashLink
                    to={link}
                    className="text-text hover:underline font-bold tracking-[0.2em]"
                >
                    {t(button_text)}
                </HashLink>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#00FFEE"
                    width="24"
                    height="24"
                >
                    <path
                        d="m13.022 14.999v3.251c0 .412.335.75.752.75.188 0 .375-.071.518-.206 1.775-1.685 4.945-4.692 6.396-6.069.2-.189.312-.452.312-.725 0-.274-.112-.536-.312-.725-1.451-1.377-4.621-4.385-6.396-6.068-.143-.136-.33-.207-.518-.207-.417 0-.752.337-.752.75v3.251h-9.02c-.531 0-1.002.47-1.002 1v3.998c0 .53.471 1 1.002 1z"/>
                </svg>
            </div>
        </div>
    );
};

export default ProjectsGridSingle;
