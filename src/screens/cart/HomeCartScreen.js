import React from 'react'
import { useTranslation } from 'react-i18next'

import Step1 from '@containers/cart/Step1'
import Step2 from '@containers/cart/Step2'
import Step3 from '@containers/cart/Step3'

import ContainerDefault from '@containers/ContainerDefault'
import AppButton from '@components/AppButton'

export default function CartScreen() {
    const { t } = useTranslation()

    const submit_order = () => {
        console.log('submit_order')
    }

    return (
        <ContainerDefault title={t('Order')}>
            <Step1 />
            <Step2 />
            <Step3 />
            <AppButton
                text={t('Submit Order')}
                styles={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
                onPress={submit_order}
            />
        </ContainerDefault>
    )
}
