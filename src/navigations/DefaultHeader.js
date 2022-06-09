import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { getHeaderTitle } from '@react-navigation/elements'

import GlobalStyle from '@styles/GlobalStyle'
import GoBackIcon from '@icons/goback.svg'
import ShareIcon from '@icons/share.svg'

export default function ({
    navigation,
    route,
    options,
    back,
    share = true,
    line = false,
}) {
    const title = getHeaderTitle(options, route.name)

    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.icon}
                    onPress={() => navigation.goBack()}
                >
                    <GoBackIcon width={10} />
                </TouchableOpacity>
                <Text style={styles.text}>{title}</Text>
                {share ? (
                    <TouchableOpacity
                        style={styles.icon}
                        onPress={() => {
                            alert('share')
                        }}
                    >
                        <ShareIcon />
                    </TouchableOpacity>
                ) : (
                    <View style={styles.placeholder}></View>
                )}
            </View>
            {line ? <View style={styles.line}></View> : null}
        </>
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
    placeholder: {
        width: 58,
    },
    line: {
        backgroundColor: GlobalStyle.color.lightgray,
        height: 1,
    },
})
