import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from 'react-native'

import AuthService from '@services/auth'
import Loading from '@containers/Loading'
import * as Message from '@utils/Message'
import GlobalStyle from '@styles/GlobalStyle'

export default function OrderHistoryProfileScreen() {
    const [orders, setOrders] = useState(false)
    const { user } = useSelector((state) => state.auth)

    useEffect(() => {
        const getOrders = async () => {
            try {
                const d = await AuthService.getOrders(user.id)
                console.log(d)
                setOrders(d)
            } catch (error) {
                Message.error({ text1: error })
            }
        }
        getOrders()
    }, [])

    return (
        <ScrollView style={styles.container}>
            <Loading data={orders}>
                <Text>coucou</Text>
            </Loading>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GlobalStyle.color.light,
    },
})
