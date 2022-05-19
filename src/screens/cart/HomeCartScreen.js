import React from 'react'
import { useTranslation } from 'react-i18next'

import Step1 from '@containers/cart/Step1'
import Step2 from '@containers/cart/Step2'

import ContainerDefault from '@containers/ContainerDefault'

export default function CartScreen() {
    const { t } = useTranslation()

    return (
        <ContainerDefault title={t('Order')}>
            <Step1 />
            <Step2 />
        </ContainerDefault>
    )
}
