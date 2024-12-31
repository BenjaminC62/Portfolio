import ButtonHeroSection from './HeroSectionButton/HeroSectionButtonAbout.tsx';
import HeroSectionImage from './HeroSectionImage/HeroSectionImage';
import './../../styles/animScroll.css'
import {HeroSectionData} from '../../types/HeroSectionData.ts'
import {useTranslation} from "react-i18next";

const HeroSection = ({nom, prenom, subtitle, description}: HeroSectionData) => {
    const {t} = useTranslation();

    return (
        <>
            <article className="flex flex-col md:flex-row md:justify-between md:items-center w-full">
                <div className="relative md:bottom-14 md:mb-0 text-center md:text-left">
                    <div className='flex justify-center md:justify-start gap-4 mb-3 mt-8 md:mt-0'>
                        <h1 className="text-4xl md:text-7xl font-bold">{t(nom)}</h1>
                        <h1 className="text-4xl md:text-7xl font-bold text-text">{t(prenom)}</h1>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-bold mb-8">{t(subtitle)}</h2>
                    <p className="text-base md:text-lg text-gray-300 w-full md:w-124">{t(description)}</p>
                    <ButtonHeroSection title='heroButton.title' subtitle='heroButton.subtitle'/>
                </div>
                <HeroSectionImage/>
            </article>
        </>
    );
};

export default HeroSection;
