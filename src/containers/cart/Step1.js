import * as React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { useTranslation } from 'react-i18next'
import { Link } from '@react-navigation/native'

import AppStyle from '@styles/AppStyle'
import GlobalStyle from '@styles/GlobalStyle'

export default function CartStep1() {
    const { t } = useTranslation()

    const delivery_address = {
        id: 1,
        name: 'Domicile',
        street: '17 avenue de la belle-fleur',
        zipcode: '33130',
        city: 'Bègles',
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={AppStyle.h3}>{t('Delivery Address')}</Text>
                {delivery_address ? (
                    <View>
                        <View style={styles.info_container}>
                            <Text style={styles.info}>
                                {delivery_address.name}
                            </Text>
                            <Text style={styles.info}>
                                {delivery_address.street},{' '}
                                {delivery_address.zipcode},{' '}
                                {delivery_address.city}
                            </Text>
                        </View>
                        <Link
                            style={AppStyle.link}
                            to={{ screen: 'CartAddressScreen' }}
                        >
                            {t('Change address')}
                        </Link>
                    </View>
                ) : (
                    <View>
                        <Link
                            style={AppStyle.link}
                            to={{ screen: 'CartAddressScreen' }}
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
