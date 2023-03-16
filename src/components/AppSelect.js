import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import RNPickerSelect from 'react-native-picker-select'

import GlobalStyle from '@styles/GlobalStyle'

export default function AppSelect({ label, items, value, setValue }) {
    return (
        <View style={styles.container}>
            {/* <RNPickerSelect
                placeholder={{ label: label, value: value }}
                onValueChange={(val) => setValue(val)}
                items={items}
                style={pickerSelectStyles}
            /> */}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GlobalStyle.color.lightgray3,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 14,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 14,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
})
