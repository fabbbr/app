import React from 'react'
import { Text, View } from 'react-native'
import { Controller } from "react-hook-form"

import FormStyle from '../styles/FormStyle'

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

    let errorStr
    if(error) errorStr = <Text>{error}</Text>


    return(
        <View style={FormStyle.box}>
            <Text style={FormStyle.label}>{label}</Text>
            <Controller
                render={({ field }) => (<Type {...field} ref={null} placeholder={placeholder} />)}
                name={name}
                control={control}
            />
            {errorStr}
        </View>
    )
}