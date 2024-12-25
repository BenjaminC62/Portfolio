import projectImage from '../../../assets/projects-images/Adventura.png';
import {Link} from "react-router-dom";

const ProjectsGridSingle = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen relative bottom-32">
            <div className="flex flex-row justify-between w-full">
                {/* Card 1 */}
                <div>
                    <div
                        className="bg-[#1a1a1a] rounded-lg flex justify-center items-center"
                        style={{
                            width: "31rem",
                            height: "24rem",
                        }}
                    >
                        <img
                            src={projectImage}
                            alt="Project"
                            className="w-full h-full rounded-md"
                            style={{
                                width: "29rem",
                                height: "18rem",
                                boxShadow: "10px 15px 30px rgba(0, 0, 0, 0.5)",
                            }}
                        />
                    </div>
                    <p className="font-semibold text-xl mt-4">Title</p>
                    <div className="flex items-center space-x-2 mt-4">
                        <Link to="/view-more" className="text-text hover:underline font-bold tracking-[0.2em]">View
                            more</Link>
                        <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"
                             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#00FFEE" width="24"
                             height="24">
                            <path
                                d="m13.022 14.999v3.251c0 .412.335.75.752.75.188 0 .375-.071.518-.206 1.775-1.685 4.945-4.692 6.396-6.069.2-.189.312-.452.312-.725 0-.274-.112-.536-.312-.725-1.451-1.377-4.621-4.385-6.396-6.068-.143-.136-.33-.207-.518-.207-.417 0-.752.337-.752.75v3.251h-9.02c-.531 0-1.002.47-1.002 1v3.998c0 .53.471 1 1.002 1z"
                                fill-rule="nonzero"/>
                        </svg>
                    </div>
                </div>

                {/* Card 2 */}
                <div>
                    <div
                        className="bg-[#1a1a1a] rounded-lg flex justify-center items-center"
                        style={{
                            width: "31rem",
                            height: "24rem",
                        }}
                    >
                        <img
                            src={projectImage}
                            alt="Project"
                            className="w-full h-full rounded-md"
                            style={{
                                width: "29rem",
                                height: "18rem",
                                boxShadow: "10px 15px 30px rgba(0, 0, 0, 0.5)",
                            }}
                        />
                    </div>
                    <p className="font-semibold text-xl mt-4">Title</p>
                    <div className="flex items-center space-x-2 mt-4">
                        <Link to="/view-more" className="text-text hover:underline font-bold tracking-[0.2em]">View
                            more</Link>
                        <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"
                             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#00FFEE" width="24"
                             height="24">
                            <path
                                d="m13.022 14.999v3.251c0 .412.335.75.752.75.188 0 .375-.071.518-.206 1.775-1.685 4.945-4.692 6.396-6.069.2-.189.312-.452.312-.725 0-.274-.112-.536-.312-.725-1.451-1.377-4.621-4.385-6.396-6.068-.143-.136-.33-.207-.518-.207-.417 0-.752.337-.752.75v3.251h-9.02c-.531 0-1.002.47-1.002 1v3.998c0 .53.471 1 1.002 1z"
                                fill-rule="nonzero"/>
                        </svg>
                    </div>
                </div>

                {/* Card 3 */}
                <div>
                    <div
                        className="bg-[#1a1a1a] rounded-lg flex justify-center items-center"
                        style={{
                            width: "31rem",  // Réduire la largeur de la carte
                            height: "24rem", // Réduire la hauteur de la carte
                        }}
                    >
                        <img
                            src={projectImage}
                            alt="Project"
                            className="w-full h-full rounded-md"
                            style={{
                                width: "29rem",
                                height: "18rem",
                                boxShadow: "10px 15px 30px rgba(0, 0, 0, 0.5)",
                            }}
                        />
                    </div>
                    <p className="font-semibold text-xl mt-4">Title</p>
                    <div className="flex items-center space-x-2 mt-4">
                        <Link to="/view-more" className="text-text hover:underline font-bold tracking-[0.2em]">View
                            more</Link>
                        <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"
                             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#00FFEE" width="24"
                             height="24">
                            <path
                                d="m13.022 14.999v3.251c0 .412.335.75.752.75.188 0 .375-.071.518-.206 1.775-1.685 4.945-4.692 6.396-6.069.2-.189.312-.452.312-.725 0-.274-.112-.536-.312-.725-1.451-1.377-4.621-4.385-6.396-6.068-.143-.136-.33-.207-.518-.207-.417 0-.752.337-.752.75v3.251h-9.02c-.531 0-1.002.47-1.002 1v3.998c0 .53.471 1 1.002 1z"
                                fill-rule="nonzero"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsGridSingle;
