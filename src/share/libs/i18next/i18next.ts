import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import translationEN from '../../../../public/locales/en/translation.json'
import aboutEn from '../../../../public/locales/en/about.json'
import mainEn from '../../../../public/locales/en/main.json'
import translationRU from '../../../../public/locales/ru/translation.json'
import aboutRu from '../../../../public/locales/ru/about.json'
import mainRu from '../../../../public/locales/ru/main.json'
const resources = {
    en: {
        translation: translationEN,
        about: aboutEn,
        main: mainEn
    },
    ru: {
        translation: translationRU,
        about: aboutRu,
        main: mainRu
    }
}

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: translationEN,
        debug: ISDEV,

        interpolation: {
            escapeValue: false
        },
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json'
        }

    })

export default i18n
