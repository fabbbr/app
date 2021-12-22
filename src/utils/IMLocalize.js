import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import * as LS from './LocalStorage'
import * as RNLocalize from 'react-native-localize'

import en from '../translations/en'
import fr from '../translations/fr'

const LANGUAGES = {
    en,
    fr
}

const LANG_CODES = Object.keys(LANGUAGES)
console.log(LANG_CODES);

const LANGUAGE_DETECTOR = {
    type: 'languageDetector',
    async: true,
    detect: callback => {
        LS.get('user-language').then(language => {
            if(!language) {
                const findBestAvailableLanguage = RNLocalize.findBestAvailableLanguage(LANG_CODES)
                callback(findBestAvailableLanguage.languageTag || 'en')
            } else {
                callback(language)
            }
        })
    },
    init: () => { },
    cacheUserLanguage: language => {
        LS.set('user-language', language);
    }
}

i18n
    .use(LANGUAGE_DETECTOR)
    .use(initReactI18next)
    .init({
        resources: LANGUAGES,
        react: {
            useSuspense: false
        },
        interpolation: {
            escapeValue: false
        },
        fallbackLng: 'en',
        defaultNS: 'main'
    })