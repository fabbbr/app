import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Text, View, StyleSheet } from 'react-native'

import { setDeliveryMethod } from '@slices/cart'
import AppStyle from '@styles/AppStyle'
import GlobalStyle from '@styles/GlobalStyle'
import CartProduct from '@components/CartProductMiniature'
import AppSelect from '@components/AppSelect'
import { fNumber } from '@utils/Tools'

export default function CartStep2({ isLoggedIn }) {
    const { t } = useTranslation()
    const dispatch = useDispatch()

    const cart = useSelector((state) => state.cart)
    const [dm, setDm] = useState(false)

    useEffect(() => {
        dispatch(setDeliveryMethod({ delivery_method: dm }))
    }, [dm])

    const items = []
    for (let id in cart.deliveries) {
        items.push({ value: id, label: cart.deliveries[id].name })
    }

    const miniatures = []
    for (let id in cart.products) {
        miniatures.push(<CartProduct key={id} product_id={id} />)
    }

    return (
        <View style={styles.container}>
            <View>{miniatures}</View>
            {isLoggedIn && (
                <>
                    <View style={styles.horizontal_lign}></View>
                    <View>
                        <View style={styles.delivery_method_container}>
                            <Text style={styles.delivery_method_text}>
                                {t('delivery_method')}
                            </Text>
                            <AppSelect
                                label={t('select_delivery')}
                                value={dm}
                                setValue={setDm}
                                items={items}
                            />
                        </View>
                        <View style={styles.delivery_cost_container}>
                            <Text style={styles.delivery_cost_text}>
                                {t('delivery_cost')}
                            </Text>
                            <Text style={styles.delivery_cost}>
                                {fNumber(
                                    dm && cart.deliveries[dm]
                                        ? cart.deliveries[dm].price
                                        : 0
                                )}{' '}
                                €
                            </Text>
                        </View>
                        <Text style={styles.delivery_date}>
                            {t('delivery_date_estimated')}: 12-15 avril
                        </Text>
                    </View>
                </>
            )}
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
        marginRight: 20,
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
