import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { Text, View, StyleSheet } from 'react-native'

import AppStyle from '@styles/AppStyle'
import GlobalStyle from '@styles/GlobalStyle'

import CartProduct from '@components/CartProductMiniature'

export default function CartStep2() {
    const { t } = useTranslation()
    const cart = useSelector((state) => state.cart)

    const miniatures = []
    for (let id in cart.products) {
        miniatures.push(<CartProduct key={id} product_id={id} />)
    }

    return (
        <View style={styles.container}>
            <View>{miniatures}</View>
            <View style={styles.horizontal_lign}></View>
            <View>
                <View style={styles.delivery_method_container}>
                    <Text style={styles.delivery_method_text}>
                        {t('Delivery Method')}
                    </Text>
                </View>
                <View style={styles.delivery_cost_container}>
                    <Text style={styles.delivery_cost_text}>
                        {t('Delivery cost')}
                    </Text>
                    <Text style={styles.delivery_cost}>0.00 €</Text>
                </View>
                <Text style={styles.delivery_date}>
                    {t('Delivery date estimated')}: 12-15 avril
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: GlobalStyle.color.light,
        padding: 20,
        marginBottom: 10,
    },
    horizontal_lign: {
        backgroundColor: GlobalStyle.color.lightgray,
        height: 1,
        marginVertical: 12,
    },
    delivery_method_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    delivery_method_text: {
        fontWeight: 'bold',
    },
    delivery_cost_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    delivery_cost_text: {
        fontWeight: 'bold',
    },
    delivery_cost: {
        ...AppStyle.text,
    },
    delivery_date: {
        ...AppStyle.text,
        marginTop: 5,
        fontSize: 12,
    },
})
