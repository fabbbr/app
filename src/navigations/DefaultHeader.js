import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { getHeaderTitle } from '@react-navigation/elements'

import GlobalStyle from '@styles/GlobalStyle'
import GoBackIcon from '@icons/goback.svg'
import ShareIcon from '@icons/share.svg'

export default function ({ navigation, route, options, back }) {
    const title = getHeaderTitle(options, route.name)

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.icon}
                onPress={() => navigation.goBack()}
            >
                <GoBackIcon width={10} />
            </TouchableOpacity>
            <Text style={styles.text}>{title}</Text>
            <TouchableOpacity
                style={styles.icon}
                onPress={() => {
                    alert('share')
                }}
            >
                <ShareIcon />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        backgroundColor: GlobalStyle.color.light,
    },
    icon: {
        padding: 20,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 16,
    },
})
