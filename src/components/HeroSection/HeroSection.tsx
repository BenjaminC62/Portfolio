import ButtonHeroSection from './HeroSectionButton/HeroSectionButton';
import dataHeroSection from './heroData.json';
import HeroSectionImage from './HeroSectionImage/HeroSectionImage';

/**
 *  HeroSection component
 *
 * @returns  HeroSection component
 */
const HeroSection = () => {
    return (
        <section className="container mx-auto flex items-center">
            <article className="flex justify-between items-center w-full mt-20 mr-20">
                <div>
                    <div className='flex gap-4 mb-3'>
                        <h1 className="text-7xl font-bold">{dataHeroSection.nom}</h1>
                        <h1 className="text-7xl font-bold text-text">{dataHeroSection.prenom}</h1>
                    </div>
                    <h2 className="text-4xl font-bold mb-8">{dataHeroSection.subtitle}</h2>
                    <p className="text-lg font-semibold w-124">{dataHeroSection.description}</p>
                    <ButtonHeroSection/>
                </div>
                <HeroSectionImage/>
            </article>
        </section>
    );
};

export default HeroSection;
