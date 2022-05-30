import * as React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { useTranslation } from 'react-i18next'
import { Link } from '@react-navigation/native'
import { useSelector } from 'react-redux'

import AppStyle from '@styles/AppStyle'
import GlobalStyle from '@styles/GlobalStyle'

export default function CartStep1() {
    const { t } = useTranslation()
    const cart = useSelector((state) => state.cart)

    return (
        <View style={styles.container}>
            <View>
                <Text style={AppStyle.h3}>{t('Delivery Address')}</Text>
                {cart.delivery_address ? (
                    <View>
                        <View style={styles.info_container}>
                            <Text style={styles.info}>
                                {cart.delivery_address.name}
                            </Text>
                            <Text style={styles.info}>
                                {cart.delivery_address.street},{' '}
                                {cart.delivery_address.zipcode},{' '}
                                {cart.delivery_address.city}
                            </Text>
                        </View>
                        <Link
                            style={AppStyle.link}
                            to={{ screen: 'AddressCartScreen' }}
                        >
                            {t('Change address')}
                        </Link>
                    </View>
                ) : (
                    <View>
                        <Link
                            style={AppStyle.link}
                            to={{ screen: 'AddressCartScreen' }}
                        >
                            {t('+ Add delivery address')}
                        </Link>
                    </View>
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: GlobalStyle.color.light,
        padding: 20,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        marginBottom: 10,
    },
    info: {
        color: GlobalStyle.color.text,
        fontSize: 12,
    },
    info_container: {
        marginTop: 5,
        marginBottom: 5,
    },
})
