import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Text, StyleSheet, ScrollView, View } from 'react-native'
import { useTranslation } from 'react-i18next'

import AuthService from '@services/auth'
import Loading from '@containers/Loading'
import * as Message from '@utils/Message'
import GlobalStyle from '@styles/GlobalStyle'

export default function OrderHistoryProfileScreen() {
    const { t } = useTranslation()
    const [addresses, setAddresses] = useState(false)
    const { user } = useSelector((state) => state.auth)

    useEffect(() => {
        const getAddresses = async () => {
            try {
                const d = await AuthService.getAddresses(user.id)
                setAddresses(d)
            } catch (error) {
                Message.error({ text1: error })
            }
        }
        getAddresses()
    }, [])

    return (
        <ScrollView style={styles.container}>
            <Loading data={addresses}>
                <View style={styles.sub_container}>
                    <Text>{t('no_address')}</Text>
                </View>
            </Loading>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GlobalStyle.color.light,
    },
    sub_container: {
        padding: GlobalStyle.container.padding,
    },
})
