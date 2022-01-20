import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { useTranslation } from 'react-i18next'

import ProductsSlider from '@containers/ProductsSlider'

import GlobalStyle from '@styles/GlobalStyle'

export default function CategoryProducts({ id_category, name }) {
    const { t } = useTranslation()

    const data = require('../test_data/home_category_products.json')

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.link}>{t('see_all')} ></Text>
            </View>
            <ProductsSlider products={data} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 30
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: 5
    },
    title: {
        color: GlobalStyle.color.dark,
        fontSize: 20,
        fontFamily: 'RiposteRegular'
    },
    link: {
        color: GlobalStyle.color.gray,
        fontFamily: 'RiposteRegular',
    }
})