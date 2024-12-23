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
                className="flex items-center justify-center w-[8rem] h-[8rem] bg-[#00d8e6] text-white font-bold rounded-50 cursor-pointer"
                style={{
                    backgroundImage: `url(${playButton})`,
                    backgroundSize: '3rem 3rem',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                }}
            />
            <div className="ml-8 font-poppins text-shadow-name">
                <p className="text-text">About me</p>
                <hr className="border-text"/>
                <p className="text-text">Discover more about me</p>
            </div>
        </div>
    )
}

export default ButtonHeroSection
