import React, { useState } from 'react'
import { Pressable, Text, View, StyleSheet } from 'react-native'
import {
    StripeProvider,
    CardField,
    useStripe,
} from '@stripe/stripe-react-native'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import * as Tools from '@utils/Tools'
import AppInput from '@components/AppInput'
import AppButton from '@components/AppButton'
import DefaultContainer from '@containers/DefaultContainer'
import GlobalStyle from '@styles/GlobalStyle'

export default function CheckoutCartScreen() {
    const { confirmPayment } = useStripe()
    const { t } = useTranslation()
    const { control, handleSubmit, setValue } = useForm()
    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false)

    const checkout = async (data) => {
        console.log(data)
        let err = {}
        if (!data.cardNumber) err.cardNumber = t('errors:form.input.empty')
        else if (data.cardNumber.length < 16)
            err.cardNumber = t('errors:form.input.cardNumber')
        if (!data.cardExpiry) err.cardExpiry = t('errors:form.input.empty')
        else if (data.cardExpiry.length < 7)
            err.cardExpiry = t('errors:form.input.cardExpiry')
        if (!data.cardCvc) err.cardCvc = t('errors:form.input.empty')
        else if (data.cardCvc.length < 3)
            err.cardCvc = t('errors:form.input.cardCvc')

        setErrors(err)
        if (Tools.objSize(err) === 0) {
            setLoading(true)

            const { error } = await stripe.createTokenWithCard({
                number: data.cardNumber,
                expMonth: data.cardExpiry.split('/')[0],
                expYear: data.cardExpiry.split('/')[1],
                cvc: data.cardCvc,
            })
            console.log(error)

            // try {
            // } catch {
            //     setLoading(false)
            // }
        }
    }

    return (
        <StripeProvider
            publishableKey="pk_test_51L6zQuClNXpWtYYW37Us7n8s2oXgSO8eazXqCYXdXkeTIOC3Knq79509oo0ocPNA3W2O6ALHUBxMpLpBNEiDU3uN00LesRsxkZ"
            merchantIdentifier="acct_1L6zQuClNXpWtYYW"
        >
            <DefaultContainer title={t('pay_by_card')}>
                <View style={styles.container}>
                    <AppInput
                        control={control}
                        name="cardNumber"
                        type="number"
                        label={t('card_number')}
                        error={errors.cardNumber}
                        maxLength={16}
                        required
                    />
                    <View>
                        <AppInput
                            control={control}
                            name="cardExpiry"
                            type="date"
                            label={t('expiry_date')}
                            error={errors.cardExpiry}
                            required
                            setValue={setValue}
                        />
                        <AppInput
                            control={control}
                            name="cardCvc"
                            type="number"
                            label={t('cvc')}
                            error={errors.cardCvc}
                            maxLength={3}
                            required
                        />
                    </View>
                </View>
                <AppButton
                    text={t('pay')}
                    onPress={handleSubmit(checkout)}
                    loading={loading}
                />
            </DefaultContainer>
        </StripeProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: GlobalStyle.color.light,
        padding: 10,
        borderRadius: 8,
        marginBottom: 10,
    },
})
