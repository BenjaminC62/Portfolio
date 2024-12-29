/* Images */
import img from './../../../assets/imageCV.png';

const WhoIAm = () => {
    return (
        <section className="container flex mx-auto items-start relative mt-12">
            <img src={img} width="700px" height="1200px" alt="img_me" className="z-50"/>
            <div
                className="absolute top-[-128px] left-[98px] w-full h-full flex justify-center items-center z-0 opacity-10 pointer-events-none">
                <h1 className="text-9xl font-bold text-white z-0">Suis</h1>
            </div>
            <div className="relative z-10 mt-8">
                <h1 className="text-7xl font-bold text-white mb-12">Qui je suis ?</h1>
                <p className="text-lg text-gray-300 mb-8">
                    Je suis Cornet Benjamin, je suis un étudiant en deuxieme année de BUT Informatique à l'iut de lens.
                    J'ai découvrir et aprèndes de nouvelles technologies,
                    À travers mes études et mes projets personnels, j'ai pu acquérir des compétences en informatique.
                </p>
                <ul className="list-none space-y-8 text-white">
                    <li><strong>Nom:</strong> Cornet Benjamin</li>
                    <li><strong>Date de naissance:</strong> 18 novembre 2005</li>
                    <li><strong>Téléphone:</strong> (+33) 7 82 57 88 32</li>
                    <li><strong>Alentour:</strong> Lens, France</li>
                </ul>
            </div>
        </section>
    );
};

export default WhoIAm;