import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import * as LS from '@utils/LocalStorage'
import * as Localization from 'expo-localization'

import en from '@translations/en'
import fr from '@translations/fr'

const LANGUAGES = {
    en,
    fr,
}

export const LANG_CODES = Object.keys(LANGUAGES)
const DEFAULT = 'en'

const LANGUAGE_DETECTOR = {
    type: 'languageDetector',
    async: true,
    detect: (callback) => {
        LS.get('user-language').then((language) => {
            if (!language) {
                let localeLanguageTag = Localization?.locale
                if (localeLanguageTag) {
                    let code = localeLanguageTag.split('-')[0].toLowerCase()
                    callback(LANG_CODES.includes(code) ? code : DEFAULT)
                } else {
                    callback(DEFAULT)
                }
            } else {
                callback(language)
            }
        })
    },
    init: () => {},
    cacheUserLanguage: (language) => {
        LS.set('user-language', language)
    },
}

i18n.use(LANGUAGE_DETECTOR)
    .use(initReactI18next)
    .init({
        resources: LANGUAGES,
        react: {
            useSuspense: false,
        },
        interpolation: {
            escapeValue: false,
        },
        fallbackLng: DEFAULT,
        defaultNS: 'main',
        compatibilityJSON: 'v3',
    })

export default i18n
