import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import GlobalStyle from '@styles/GlobalStyle'
import AppStyle from '@styles/AppStyle'
import Icon3lines from '@icons/title-3lines.svg'

export default function AppTitle({ text, align, icon, dash }) {
    if (align === undefined || !align.length) align = 'flex-start'

    let Dash
    if (dash === true) {
        Dash = <View style={styles.line}></View>
    }

    let Icon
    switch (icon) {
        case '3lines':
            Icon = (
                <View style={styles.icon_box}>
                    <Icon3lines />
                </View>
            )
            break
    }

    return (
        <View style={{ ...styles.box, justifyContent: align }}>
            {Dash}
            <Text style={{ ...styles.text }}>{text}</Text>
            {Icon}
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
    },
    text: {
        ...AppStyle.h1,
        marginBottom: 5,
    },
    icon_box: {
        marginLeft: 2,
    },
    line: {
        marginTop: 14,
        marginRight: 6,
        width: 16,
        height: 1,
        backgroundColor: GlobalStyle.color.primary,
    },
})
