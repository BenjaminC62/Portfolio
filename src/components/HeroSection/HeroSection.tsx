/* Components */
import ButtonHeroSection from './HeroSectionButton/HeroSectionButtonAbout.tsx';
import HeroSectionImage from './HeroSectionImage/HeroSectionImage';

/* Css */
import './../../styles/animScroll.css'

/* Types */
import {HeroSectionData} from '../../types/HeroSectionData.ts'
import {useTranslation} from "react-i18next";

/**
 *  HeroSection component
 *
 * @returns  HeroSection component
 */
const HeroSection = ({nom, prenom, subtitle, description}: HeroSectionData) => {
    const {t} = useTranslation();

    return (
        <>
            <article className="flex  justify-between items-center w-full mr-20">
                <div className="relative bottom-14 md:mb-0">
                    <div className='flex gap-4 mb-3'>
                        <h1 className="text-7xl font-bold">{t(nom)}</h1>
                        <h1 className="text-7xl font-bold text-text">{t(prenom)}</h1>
                    </div>
                    <h2 className="text-4xl font-bold mb-8">{t(subtitle)}</h2>
                    <p className="text-lg text-gray-300 w-124 md:w-124">{t(description)}</p>
                    <ButtonHeroSection title='heroButton.title' subtitle='heroButton.subtitle'/>
                </div>
                <HeroSectionImage/>
            </article>

        </>
    );
};

export default HeroSection;
