import React, { useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from 'react-native'
import useTranslation from 'react-i18next'

import i18n, { LANG_CODES } from '@constants/IMLocalize'
import * as LS from '@utils/LocalStorage'
import GlobalStyle from '@styles/GlobalStyle'
import AppSelect from '@components/AppSelect'

export default function SettingsProfileScreen() {
    const { t } = useTranslation()
    console.log(LANG_CODES)
    const [language, setLanguage] = useState(false)
    const reload = async () => {
        i18n.changeLanguage('en')
    }

    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity onPress={reload}>
                {/* <AppSelect
                    label={t('select_lang')}
                    // value={dm}
                    // setValue={setDm}
                    items={items}
                /> */}
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GlobalStyle.color.light,
        padding: GlobalStyle.container.padding,
    },
})
