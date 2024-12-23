import ButtonHeroSection from './HeroSectionButton/HeroSectionButtonAbout.tsx';
import dataHeroSection from './heroData.json';
import HeroSectionImage from './HeroSectionImage/HeroSectionImage';
import './../../styles/animScroll.css'

/**
 *  HeroSection component
 *
 * @returns  HeroSection component
 */
const HeroSection = () => {
    return (
        <>

            <article className="flex justify-between items-center w-full mr-20">
                <div className="relative bottom-14">
                    <div className='flex gap-4 mb-3'>
                        <h1 className="text-7xl font-bold">{dataHeroSection.nom}</h1>
                        <h1 className="text-7xl font-bold text-text">{dataHeroSection.prenom}</h1>
                    </div>
                    <h2 className="text-4xl font-bold mb-8">{dataHeroSection.subtitle}</h2>
                    <p className="text-lg text-gray-300 w-124">{dataHeroSection.description}</p>
                    <ButtonHeroSection/>
                </div>
                <HeroSectionImage/>
            </article>

        </>
    );
};

export default HeroSection;
