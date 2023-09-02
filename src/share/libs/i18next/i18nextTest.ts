import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import translationRU from '../../../../public/locales/ru/translation.json'
import aboutRu from '../../../../public/locales/ru/about.json'
import mainRu from '../../../../public/locales/ru/main.json'
i18n
    .use(initReactI18next)
    .init({
        lng: 'ru',
        fallbackLng: 'ru',

        // have a common namespace used around the full app
        ns: ['ru'],
        defaultNS: 'ru',

        debug: false,

        interpolation: {
            escapeValue: false // not needed for react!!
        },

        resources: {
            ru:
        {
            translation: translationRU,
            about: aboutRu,
            main: mainRu
        }
        }
    })

export default i18n
