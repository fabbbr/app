import React from 'react'
import { useSelector } from 'react-redux'
import { StyleSheet, View, Text } from 'react-native'
import { useTranslation } from 'react-i18next'

import GlobalStyle from '@styles/GlobalStyle'
import AppStyle from '@styles/AppStyle'
import { fNumber } from '@utils/Tools'

export default function CartStep3() {
    const { t } = useTranslation()
    const cart = useSelector((state) => state.cart)

    let sub_total = 0
    for (let id in cart.products) {
        sub_total += cart.products[id].price * cart.products[id].quantityInCart
    }
    let delivery_cost =
        cart.delivery_method && cart.deliveries[cart.delivery_method]
            ? cart.deliveries[cart.delivery_method].price
            : 0
    let total = sub_total + delivery_cost

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.bold}>{t('subtotal')}</Text>
                <Text style={AppStyle.text}>{fNumber(sub_total)} €</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.bold}>{t('delivery_cost')}</Text>
                <Text style={AppStyle.text}>{fNumber(delivery_cost)} €</Text>
            </View>
            <View style={styles.line}></View>
            <View style={styles.row}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.total}>{t('total')}</Text>
                    <Text style={AppStyle.text}> ({t('tva_included')})</Text>
                </View>
                <Text style={{ ...AppStyle.text, ...styles.bold }}>
                    {fNumber(total)}€
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: GlobalStyle.color.light,
        padding: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    total: {
        fontWeight: 'bold',
        color: GlobalStyle.color.dark,
        textTransform: 'uppercase',
    },
    bold: {
        fontWeight: 'bold',
        color: GlobalStyle.color.dark,
    },
    line: {
        backgroundColor: GlobalStyle.color.lightgray,
        height: 1,
        marginVertical: 10,
    },
})
