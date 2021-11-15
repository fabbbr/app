import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import EmailInput from './inputs/EmailInput'

export default function AppInput({ type, value, label, setValue, placeholder, required, verify }) {
    let Type
    switch(type) {
        case 'email':
            Type = EmailInput
            break
        case 'password':
            break
        case'text':
            break
        case 'number':
            break
        case 'date':
            break
        case 'phone':
            break

    }


    return(
        <View style={styles.box}>
            <Text style={styles.label}>{label}</Text>
            <Type 
                value={value} 
                setValue={setValue} 
                placeholder={placeholder} 
                required={required} 
                verify={verify}
            />
        </View>
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