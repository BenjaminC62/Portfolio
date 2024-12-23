import playButton from './../../../assets/icons/play-button-icon.png'
import {Link} from "react-router-dom";

/**
 * Button, that show my projects
 *
 * @returns Button, that show my projects
 */
const ButtonHeroSection = () => {
    return (
        <div className="relative bottom-[-10rem] flex items-center justify-center">
            <Link
                to="/aboutme"
                className="flex items-center justify-center w-[6rem] h-[6rem] bg-[#00d8e6] text-white font-bold rounded-50 cursor-pointer animate-pulse"
                style={{
                    backgroundImage: `url(${playButton})`,
                    backgroundSize: '3rem 3rem',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                }}
            />
            <div className="ml-8 font-poppins text-shadow-name flex flex-col justify-center">
                <p className="text-xl mx-auto font-semibold">About me</p>
                <hr className="border-text my-1"/>
                <p className="text-lg text-text font-semibold">Discover more about me</p>
            </div>
        </div>
    )
}

export default ButtonHeroSection
