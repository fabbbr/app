import React from 'react'
import { useTranslation } from 'react-i18next'

import CartStep1 from '@screens/parts/cart/CartStep1'
import CartStep2 from '@screens/parts/cart/CartStep2'
import CartStep3 from '@screens/parts/cart/CartStep3'

import ContainerDefault from '@containers/ContainerDefault'
import AppButton from '@components/AppButton'

export default function CartScreen() {
    const { t } = useTranslation()

    const submit_order = () => {
        console.log('submit_order')
    }

    return (
        <ContainerDefault title={t('order')}>
            <CartStep1 />
            <CartStep2 />
            <CartStep3 />
            <AppButton
                text={t('submit_order')}
                styles={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
                onPress={submit_order}
            />
        </ContainerDefault>
    )
}
