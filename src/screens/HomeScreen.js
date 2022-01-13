import * as React from 'react'
import { Text, View } from 'react-native'
import { useTranslation } from 'react-i18next'

import AppTitle from '@components/AppTitle'
import HomeStyle from '@styles/HomeStyle'
import GlobalStyle from '@styles/GlobalStyle'

export default function HomeScreen() {
    const { t } = useTranslation()

    return (
        <View style={HomeStyle.container}>
            <AppTitle text={t('trends')} icon="3lines" dash />
            <Text style={HomeStyle.sub_title}>{t('creation_recommendation')}</Text>
        </View>
    );
}