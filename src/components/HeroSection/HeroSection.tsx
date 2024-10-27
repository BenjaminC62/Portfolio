import dataHeroSection from './heroData.json'
import HeroSectionImage from './HeroSectionImage/HeroSectionImage';

const HeroSection = () => {
  return (
    <main className="h-screen bg-main text-white ">
        <section>
            <article>
                <div className='flex justify-center items-center gap-52'>
                    <div>
                        <div className='flex flex-col items-center'>
                            <div className='flex gap-4 mb-3'>
                                <h1 className="text-6xl font-bold">{dataHeroSection.nom} </h1>
                                <h1 className="text-6xl font-bold text-text">{dataHeroSection.prenom}</h1>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold">{dataHeroSection.subtitle}</h2>
                        </div>
                    </div>
                    <HeroSectionImage />
                </div>
            </article>
        </section>
    </main>
  )
}

export default HeroSection;
