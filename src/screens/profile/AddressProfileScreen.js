import React, { useEffect, useState } from 'react'
import { Text, StyleSheet, ScrollView } from 'react-native'

import AuthService from '@services/auth'
import Loading from '@containers/Loading'
import * as Message from '@utils/Message'
import GlobalStyle from '@styles/GlobalStyle'

export default function OrderProfileScreen({ route }) {
    const [address, setAddress] = useState(false)
    const { id } = route.params

    useEffect(() => {
        const getAddress = async () => {
            try {
                const d = await AuthService.getAddress(id)
                setAddress(d)
            } catch (error) {
                Message.error({ text1: error })
            }
        }
        getAddress()
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
