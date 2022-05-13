import * as React from 'react'
import { Text, View } from 'react-native'
import { useTranslation } from 'react-i18next'

import Step1 from '@containers/cart/Step1'
import AppStyle from '@styles/AppStyle'
import GlobalStyle from '@styles/GlobalStyle'

export default function CartScreen() {
    const { t } = useTranslation()

    return (
        <View style={styles.container}>
            <View style={styles.container_top}>
                <Text style={styles.title}>{t('Order')}</Text>
            </View>
            <View style={styles.container_bottom}>
                <Step1 />
            </View>
        </View>
    )
}

const styles = {
    container: {
        flex: 1,
    },
    container_top: {
        backgroundColor: GlobalStyle.color.primary,
        paddingTop: 50,
        paddingBottom: 50,
        paddingLeft: GlobalStyle.container.padding,
        paddingRight: GlobalStyle.container.padding,
    },
    container_bottom: {
        paddingLeft: GlobalStyle.container.padding,
        paddingRight: GlobalStyle.container.padding,
        marginTop: -40,
    },
    title: {
        ...AppStyle.h2,
        color: GlobalStyle.color.light,
    },
}
