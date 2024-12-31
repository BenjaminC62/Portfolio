import playButton from './../../../assets/icons/play-button-icon.png'
import {Link} from "react-router-dom";
import {HeroSectionButtonProps} from '../../../types';
import React from "react";
import {useTranslation} from "react-i18next";

const ButtonHeroSection: React.FC<HeroSectionButtonProps> = ({title, subtitle}) => {
    const {t} = useTranslation();

    return (
        <div
            className="relative bottom-[-1rem] md:bottom-[-10rem] md:right-[1rem] flex items-center justify-center flex-col md:flex-row">
            <Link
                to="/aboutme"
                className="flex items-center justify-center w-[6rem] h-[6rem] bg-[#00d8e6] text-white font-bold rounded-full cursor-pointer animate-pulse"
                style={{
                    backgroundImage: `url(${playButton})`,
                    backgroundSize: '3rem 3rem',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                }}
            />
            <div
                className="md:ml-8 font-poppins text-shadow-name flex flex-col justify-center md:flex md:flex-col md:justify-center mt-4 md:mt-0">
                <p className="text-xl mx-auto font-semibold">{t(title)}</p>
                <hr className="border-text my-1"/>
                <p className="text-lg text-text font-semibold">{t(subtitle)}</p>
            </div>
        </div>
    )
}

export default ButtonHeroSection;
