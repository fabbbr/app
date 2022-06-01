import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'

import ProductsSlider from '@containers/ProductsSlider'
import ListHeader from '@components/ListHeader'

import GlobalStyle from '@styles/GlobalStyle'

export default function CategoryProducts({ id_category, id_store, name, bs }) {
    const navigation = useNavigation()
    const { t } = useTranslation()

    const navigateToProductList = () => {
        navigation.navigate('ProductListScreen', {
            id_category,
            id_store,
            bs,
        })
    }

    const data = require('../test_data/home_category_products.json')

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <ListHeader name={name} onPress={navigateToProductList} />
            </View>
            <ProductsSlider products={data} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 30,
    },
    header: {
        marginBottom: 5,
    },
    title: {
        color: GlobalStyle.color.dark,
        fontSize: 20,
        fontFamily: 'RiposteRegular',
    },
    link: {
        color: GlobalStyle.color.gray,
        fontFamily: 'RiposteRegular',
    },
})
