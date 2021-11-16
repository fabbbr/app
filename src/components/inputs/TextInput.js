import React from 'react'
import { TextInput, View } from 'react-native'

export default function TextInput2({ onChange, onBlur, value, placeholder }) {

    return(
        <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder={placeholder}
          />
    )
}

const styles = {
    box: {
        marginVertical: 12
    },
    label: {
        marginBottom: 5
    },
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5
    }
}