import React, { useState } from 'react'
import { TextInput, View } from 'react-native'
import * as Verifier from '../../utils/Verifier'

export default function EmailInput({ value, setValue, placeholder, required, verify }) {

    return(
        <View>
            <TextInput 
               placeholder={placeholder ? placeholder : ''}
               onChangeText={setValue}
               value={value}
            />
        </View>
    )
}