import React from 'react'
import { View, StyleSheet } from 'react-native'

import GlobalStyle from '@styles/GlobalStyle'

export default function SliderIndicator({ width, length, pos }) {
    const cursorWidth = width / length
    const offset = pos / length

    return (
        <View style={{ ...styles.container, width: width }}>
            <View
                style={{
                    ...styles.cursor,
                    width: cursorWidth,
                    marginLeft: offset,
                }}
            ></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 5,
        backgroundColor: GlobalStyle.color.lightgray,
    },
    cursor: {
        height: 5,
        backgroundColor: GlobalStyle.color.primary,
    },
})
