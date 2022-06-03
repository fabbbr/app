import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import CartStep1 from '@screens/parts/cart/CartStep1'
import CartStep2 from '@screens/parts/cart/CartStep2'
import CartStep3 from '@screens/parts/cart/CartStep3'
import ContainerDefault from '@containers/ContainerDefault'
import AppButton from '@components/AppButton'
import AppStyle from '@styles/AppStyle'

export default function CartScreen({ navigation }) {
    const { t } = useTranslation()
    const { isLoggedIn } = useSelector((state) => state.auth)

    const submit_order = () => {
        console.log('submit_order')
    }

    const login = () => {
        navigation.navigate('Profile', { screen: 'LoginProfileScreen' })
    }

    return (
        <ContainerDefault title={t('order')}>
            {isLoggedIn ? <CartStep1 /> : false}
            <CartStep2 />
            {isLoggedIn ? <CartStep3 /> : false}
            {isLoggedIn ? (
                <AppButton
                    text={t('submit_order')}
                    styles={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
                    onPress={submit_order}
                />
            ) : (
                <>
                    <Text style={styles.cart_connect_to_order}>
                        {t('cart_connect_to_order')}
                    </Text>
                    <AppButton text={t('login')} onPress={login} />
                </>
            )}
        </ContainerDefault>
    )
}

const styles = StyleSheet.create({
    cart_connect_to_order: {
        ...AppStyle.text,
        textAlign: 'center',
        marginTop: 30,
        marginBottom: 10,
    },
})
