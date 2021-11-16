import React from 'react'
import { TextInput, View } from 'react-native'

export default function PasswordInput({ onChange, onBlur, value, placeholder }) {

    return(
        <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder={placeholder}
            secureTextEntry={true} 
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