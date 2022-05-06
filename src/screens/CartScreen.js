import * as React from 'react'
import { Text, View } from 'react-native'
import { useTranslation } from 'react-i18next'

export default function MessageScreen() {
    const { t } = useTranslation()

    return (
        <View style={styles.container}>
            <Text>{t('Cart')}!</Text>
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
