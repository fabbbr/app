import * as React from 'react'
import { Text, View } from 'react-native'
import { useTranslation } from 'react-i18next'

export default function SearchScreen() {
    const { t } = useTranslation()

    return (
        <View style={styles.container}>
            <Text>{t('search')}!</Text>
        </View>
    )
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
}
