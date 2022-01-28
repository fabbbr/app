import React from 'react'
import { TextInput } from 'react-native'
import FormStyle from '@styles/FormStyle'

export default function PasswordInput({ onChange, onBlur, value, placeholder }) {

    return(
        <TextInput
            style={FormStyle.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder={placeholder}
            secureTextEntry={true} 
          />
    )
}