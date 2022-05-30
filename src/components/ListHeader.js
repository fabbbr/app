import React from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'
import { useTranslation } from 'react-i18next'

import GlobalStyle from '@styles/GlobalStyle'

export default function ListHeader({ onPress, name }) {
    const { t } = useTranslation()

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{name}</Text>
            <Pressable onPress={onPress}>
                <Text style={styles.link}>
                    {t('see_all')} {'>'}
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    title: {
        color: GlobalStyle.color.dark,
        fontSize: 18,
        fontFamily: 'RiposteRegular',
        fontWeight: 'bold',
    },
    link: {
        color: GlobalStyle.color.gray,
        fontFamily: 'RiposteRegular',
    },
})
