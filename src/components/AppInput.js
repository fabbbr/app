import React from 'react'
import { Text, View } from 'react-native'
import { Controller } from "react-hook-form"

import TextInput from './inputs/TextInput'
import PasswordInput from './inputs/PasswordInput'
import NumberInput from './inputs/NumberInput'
import DateInput from './inputs/DateInput'

export default function AppInput({ control, name, type, label, placeholder, error }) {
    let Type
    switch(type) {
        case 'text':
            Type = TextInput
            break
        case 'password':
            Type = PasswordInput 
            break
        case 'number':
            Type = NumberInput
            break
        case 'date':
            Type = DateInput
            break
    }


    return(
        <View style={styles.box}>
            <Text style={styles.label}>{label}</Text>
            <Controller
                render={({ field }) => (<Type {...field} ref={null} placeholder={placeholder} />)}
                name={name}
                control={control}
            />
            <Text>{error}</Text>
        </View>
    )
}

const styles = {
    box: {
        marginVertical: 12
    },
    label: {
        marginBottom: 5
    }
}