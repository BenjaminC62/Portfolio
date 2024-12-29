/* Components */
import ButtonHeroSection from './HeroSectionButton/HeroSectionButtonAbout.tsx';
import HeroSectionImage from './HeroSectionImage/HeroSectionImage';

/* Css */
import './../../styles/animScroll.css'

/* Json */
import heroButton from './HeroSectionButton/heroButton.json'

/* Types */
import {HeroSectionData} from '../../types/HeroSectionData.ts'

/**
 *  HeroSection component
 *
 * @returns  HeroSection component
 */
const HeroSection = ({nom, prenom, subtitle, description}: HeroSectionData) => {
    return (
        <>

            <article className="flex  justify-between items-center w-full mr-20">
                <div className="relative bottom-14 md:mb-0">
                    <div className='flex gap-4 mb-3'>
                        <h1 className="text-7xl font-bold">{nom}</h1>
                        <h1 className="text-7xl font-bold text-text">{prenom}</h1>
                    </div>
                    <h2 className="text-4xl font-bold mb-8">{subtitle}</h2>
                    <p className="text-lg text-gray-300 w-124 md:w-124">{description}</p>
                    <ButtonHeroSection title={heroButton.title} subtitle={heroButton.subtitle}/>
                </div>
                <HeroSectionImage/>
            </article>

        </>
    );
};

export default HeroSection;
