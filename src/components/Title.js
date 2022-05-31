import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import GlobalStyle from '@styles/GlobalStyle'

export default function Title({ icon, title }) {
    return (
        <View style={styles.container}>
            {icon ? icon : ''}
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        marginLeft: 10,
        color: GlobalStyle.color.dark,
        fontSize: 15,
        fontWeight: 'bold',
    },
})
