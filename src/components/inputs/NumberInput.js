import React from 'react'
import { TextInput } from 'react-native'
import FormStyle from '@styles/FormStyle'

export default function NumberInput({
    onChange,
    onBlur,
    value,
    placeholder,
    maxLength,
}) {
    if (value) value = value.replace(/[^0-9]/g, '')

    return (
        <TextInput
            style={FormStyle.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder={placeholder}
            keyboardType="phone-pad"
            maxLength={maxLength}
        />
    )
}
