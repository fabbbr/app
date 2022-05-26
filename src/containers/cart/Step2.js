import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { Text, View, StyleSheet } from 'react-native'

import AppStyle from '@styles/AppStyle'
import GlobalStyle from '@styles/GlobalStyle'

import CartProduct from '@components/CartProductMiniature'

export default function CartStep2() {
    const cart = useSelector((state) => state.cart)

    const miniatures = []
    for (let id in cart.products) {
        miniatures.push(<CartProduct key={id} product_id={id} />)
    }

    return (
        <View style={styles.container}>
            <View>{miniatures}</View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: GlobalStyle.color.light,
        padding: 20,
        marginBottom: 10,
    },
})
