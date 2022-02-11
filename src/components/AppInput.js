import React from 'react'
import { Text, View } from 'react-native'
import { Controller } from 'react-hook-form'

import FormStyle from '@styles/FormStyle'

import TextInput from '@components/inputs/TextInput'
import PasswordInput from '@components/inputs/PasswordInput'
import NumberInput from '@components/inputs/NumberInput'
import DateInput from '@components/inputs/DateInput'

export default function AppInput({
    control,
    name,
    type,
    label,
    placeholder,
    required,
    error,
    defaultValue,
}) {
    let Type
    switch (type) {
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
    if (error) errorStr = <Text>{error}</Text>
    if (required) label += ' *'

    return (
        <View style={FormStyle.box}>
            <Text style={FormStyle.label}>{label}</Text>
            <Controller
                render={({ field }) => (
                    <Type
                        {...field}
                        ref={null}
                        placeholder={placeholder}
                        value={defaultValue}
                    />
                )}
                name={name}
                control={control}
            />
            {errorStr}
        </View>
    )
}
