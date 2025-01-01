/* Images */
import img from './../../../assets/imageCV.png';
import {useTranslation} from "react-i18next";

/* Types */
type WhoIAmProps = {
    title: string;
    letter: string;
    bio: string;
    nom: string;
    date: string;
    tel: string;
    adresse: string;
    name_list: string;
    date_list: string;
    tel_list: string;
    adress_list: string;
}

const WhoIAm = ({
                    title,
                    letter,
                    bio,
                    nom,
                    date,
                    tel,
                    adresse,
                    adress_list,
                    date_list,
                    tel_list,
                    name_list
                }: WhoIAmProps) => {
    const {t} = useTranslation();

    return (
        <section
            className="container sm:mx-0 md:mx-0 lg:mx-auto lg:items-center xl:flex xl:mx-auto xl:items-start xl:relative xl:mt-12 2xl:flex 2xl:mx-auto 2xl:items-start 2xl:relative 2xl:mt-12">
            <img src={img} width="700px" height="1200px" alt="img_me" className="z-50 mx-auto"/>
            <div
                className="absolute xl:top-[-128px] xl:left-[250px] 2xl:top-[-128px] 2xl:left-[98px] w-full h-full flex justify-center items-center z-0 opacity-10 pointer-events-none">
                <h1 className="text-9xl font-bold text-white z-0 hidden sm:hidden md:hidden lg:hidden xl:block">{t(letter)}</h1>
            </div>
            <div className="relative z-10 mt-8 text-center xl:text-left 2xl:text-left">
                <h1 className="text-7xl font-bold text-white mb-12">{t(title)}</h1>
                <p className="text-lg text-gray-300 mb-8">
                    {t(bio)}
                </p>
                <ul className="list-none space-y-8 text-white">
                    <li><strong>{t(name_list)}:</strong> {t(nom)}</li>
                    <li><strong>{t(date_list)}:</strong> {t(date)}</li>
                    <li><strong>{t(tel_list)} :</strong> {t(tel)}</li>
                    <li><strong>{t(adress_list)} :</strong> {t(adresse)}</li>
                </ul>
            </div>
        </section>
    );
};

export default WhoIAm;