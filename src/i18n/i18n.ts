import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

// Import des traductions
/* FR */
import ContactFR from './../locales/fr/ContactPart.json';
import heroFR from './../locales/fr/heroData.json';
import ExperiencesFR from './../locales/fr/Experiences.json';
import HeroButtonFR from './../locales/fr/heroButton.json';
import SkillsSectionDescFR from './../locales/fr/SkillsSectionDescription.json';
import SkillsSectionGridDescFR from './../locales/fr/SkillsSectionGrid.json';
import WhoIAmFR from './../locales/fr/WhoIAm.json';


/* EN */
import ContactEN from '../locales/en/ContactPart.json';
import heroEN from './../locales/en/heroData.json';
import ExperiencesEN from './../locales/en/Experiences.json';
import HeroButtonEN from './../locales/en/heroButton.json';
import SkillsSectionDescEN from './../locales/en/SkillsSectionDescription.json';
import SkillsSectionGridDescEN from './../locales/en/SkillsSectionGrid.json';
import WhoIAmEN from './../locales/en/WhoIAm.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    contact: ContactEN,
                    hero: heroEN,
                    exp: ExperiencesEN,
                    heroButton: HeroButtonEN,
                    skillsDesc: SkillsSectionDescEN,
                    skillsGrid: SkillsSectionGridDescEN,
                    whoIAm: WhoIAmEN,
                }
            },
            fr: {
                translation: {
                    contact: ContactFR,
                    hero: heroFR,
                    exp: ExperiencesFR,
                    heroButton: HeroButtonFR,
                    skillsDesc: SkillsSectionDescFR,
                    skillsGrid: SkillsSectionGridDescFR,
                    whoIAm: WhoIAmFR,
                }
            },
        },
        lng: 'fr',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
