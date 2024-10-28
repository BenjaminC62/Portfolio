import dataHeroSection from './heroData.json';
import HeroSectionImage from './HeroSectionImage/HeroSectionImage';

const HeroSection = () => {
  return (
    <main className=" text-white">
        <section className="container mx-auto flex items-center">
            <article className="flex justify-between items-center w-full mt-20">
                <div>
                    <div className='flex gap-4 mb-3'>
                        <h1 className="text-7xl font-bold">{dataHeroSection.nom}</h1>
                        <h1 className="text-7xl font-bold text-text">{dataHeroSection.prenom}</h1>
                    </div>
                    <h2 className="text-4xl font-bold mb-8">{dataHeroSection.subtitle}</h2>
                    <p className="text-lg font-semibold w-124">{dataHeroSection.description}</p>
                </div>
                
                <HeroSectionImage />
            </article>
        </section>
    </main>
  );
};

export default HeroSection;
