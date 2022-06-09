import React, { useState } from 'react'
import { Alert, ScrollView, StyleSheet, View } from 'react-native'
import { CardField, useConfirmPayment } from '@stripe/stripe-react-native'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import GlobalStyle from '@styles/GlobalStyle'
import { API_URL } from '@constants'
import * as Tools from '@utils/Tools'
import DefaultContainer from '@containers/DefaultContainer'
import AppButton from '@components/AppButton'
import AppInput from '@components/AppInput'

export default function Card() {
    const { t } = useTranslation()
    const cart = useSelector((state) => state.cart)
    const [errors, setErrors] = useState({})
    const { confirmPayment, loading } = useConfirmPayment()
    const { control, handleSubmit } = useForm()

    let sub_total = 0
    for (let id in cart.products) {
        sub_total += cart.products[id].price * cart.products[id].quantityInCart
    }
    let delivery_cost =
        cart.delivery_method && cart.deliveries[cart.delivery_method]
            ? cart.deliveries[cart.delivery_method].price
            : 0
    let total = sub_total + delivery_cost

    const fetchPaymentIntentClientSecret = async () => {
        const response = await fetch(`${API_URL}/create-payment-intent`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                paymentMethodType: 'card',
                currency: 'eur',
                amount: 1000,
            }),
        })
        const { clientSecret } = await response.json()

        return clientSecret
    }

    const handlePress = (data) => {
        let err = {}
        if (!data.name) err.name = t('errors:form.input.empty')
        setErrors(err)

        if (Tools.objSize(err) === 0) {
            // handlePay()
        }
    }

    const handlePay = async (data) => {
        // 1. fetch Intent Client Secret from backend
        const clientSecret = await fetchPaymentIntentClientSecret()

        // 2. Gather customer billing information (ex. email)
        const billingDetails = {
            name,
        }

        const { error, paymentIntent } = await confirmPayment(clientSecret, {
            type: 'Card',
            billingDetails,
        })

        if (error) {
            Alert.alert(`Error code: ${error.code}`, error.message)
            console.log('Payment confirmation error', error.message)
        } else if (paymentIntent) {
            Alert.alert(
                'Success',
                `The payment was confirmed successfully! currency: ${paymentIntent.currency}`
            )
            console.log('Success from promise', paymentIntent)
        }
    }

    return (
        <ScrollView style={styles.container}>
            <DefaultContainer title={t('payment')}>
                <View style={styles.content_container}>
                    <AppInput
                        control={control}
                        name="name"
                        type="text"
                        label={t('name')}
                        error={errors.name}
                    />
                    <CardField
                        placeholder={{
                            number: '4242 4242 4242 4242',
                        }}
                        cardStyle={inputStyles}
                        style={styles.cardField}
                    />
                </View>
                <AppButton
                    onPress={handleSubmit(handlePress)}
                    text={t('pay') + ' ' + total + '€'}
                    styles={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
                    loading={loading}
                />
            </DefaultContainer>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content_container: {
        backgroundColor: GlobalStyle.color.light,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        padding: 20,
    },
    cardField: {
        width: '100%',
        height: 50,
        marginVertical: 30,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    text: {
        marginLeft: 12,
    },
    input: {
        height: 44,
        borderBottomColor: GlobalStyle.color.light,
        borderBottomWidth: 1.5,
    },
})

const inputStyles = {
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    borderColor: '#000000',
    borderRadius: 8,
    fontSize: 14,
    placeholderColor: '#999999',
}
