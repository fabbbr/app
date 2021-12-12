import * as React from "react"
import { StyleSheet, TouchableOpacity, Text } from "react-native"

export default function AppButton({ onPress, title, type }) {

    if(type === undefined || !type.length) type = 'filled'

    return(
        <TouchableOpacity onPress={onPress} style={styles[type].container}>
            <Text style={styles[type].text}>{title}</Text>
        </TouchableOpacity>
    )
}

const blue1 = '#236090'

const containerBase = {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
}
const textBase = {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
}

const styles = {
    filled: {
        container: {
            ...containerBase,
            backgroundColor: blue1
        },
        text: {
            ...textBase,
            color: 'white'
        }
    },
    outlined: {
        container: {
            ...containerBase,
            borderColor: blue1,
            borderWidth: 1
        },
        text: {
            ...textBase,
            color: blue1
        }
    }
};
