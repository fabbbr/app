import React, { useEffect, useState } from 'react'
import { Text, StyleSheet, ScrollView } from 'react-native'

import AuthService from '@services/auth'
import Loading from '@containers/Loading'
import * as Message from '@utils/Message'
import GlobalStyle from '@styles/GlobalStyle'

export default function OrderProfileScreen({ route }) {
    const [order, setOrder] = useState(false)
    const { id } = route.params

    useEffect(() => {
        const getOrder = async () => {
            try {
                const d = await AuthService.getOrder(id)
                setOrder(d)
            } catch (error) {
                Message.error({ text1: error })
            }
        }
        getOrder()
    }, [])

    return (
        <ScrollView style={styles.container}>
            <Loading data={order}></Loading>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GlobalStyle.color.light,
    },
})
