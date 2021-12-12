import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function TextLine({ text, color, lineColor }) {
    return (
        <View style={styles.wrapper}>
            <View style={{...styles.line, backgroundColor: lineColor}}></View>
            <Text style={{...styles.text, color: color}}>{text}</Text>
            <View style={{...styles.line, backgroundColor: lineColor}}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        textAlign: 'center',
        paddingHorizontal: 8
    },
    line: {
        flex: 1,
        height: 1
    }
})