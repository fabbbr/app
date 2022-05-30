import React from 'react'
import { useTranslation } from 'react-i18next'
import { View, Text, StyleSheet } from 'react-native'

export default function StoreHeader() {
    const { t } = useTranslation()

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{t('Store')}</Text>
        </View>
    )
}
