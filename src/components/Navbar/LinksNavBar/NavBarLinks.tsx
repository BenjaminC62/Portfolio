// Note: This is the Hero Section Links component.
import {Link} from "react-router-dom";
import githubIcon from "./../../../assets/icons-navbar/github-icon-navbar.png";
import linkedinIcon from "./../../../assets/icons-navbar/linkedin-icon-navbar.png";
import {useTranslation} from "react-i18next";

/* Images */
import frenchIcon from './../../../assets/icons-navbar/frech-flag-icon.png';
import ukIcon from './../../../assets/icons-navbar/uk-flag-icon.png';

const HeroSectionLinks = () => {
    const {i18n} = useTranslation();

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    // @ts-ignore
    return (
        <div className='flex flex-row'>
            <Link to="https://github.com/BenjaminC62" target="_blank" className="mr-8"><img src={githubIcon}
                                                                                            className="w-10 h-10 rounded-50 cursor-pointer ring-offset-primary"
                                                                                            alt="github-icon"/></Link>
            <Link to="https://www.linkedin.com/in/benjamin-cornet62/" target="_blank" className="mr-8"><img
                src={linkedinIcon} className="w-8 h-8 cursor-pointer ring-offset-primary" alt="linkedin-icon"/></Link>
            <button onClick={() => changeLanguage(i18n.language === 'en' ? 'fr' : 'en')}
                    className="text-white mx-2 mr-8">
                <img
                    src={i18n.language === 'en' ? frenchIcon : ukIcon}
                    alt={i18n.language === 'en' ? 'Français' : 'English'} className="w-10 h-10"/>
            </button>
        </div>
    )
}

export default HeroSectionLinks
