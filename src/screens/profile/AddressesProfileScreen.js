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
import Message from '@utils/Message'
import GlobalStyle from '@styles/GlobalStyle'

export default function OrderHistoryProfileScreen() {
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
