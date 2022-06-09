import React, { useState } from 'react'
import { TextInput } from 'react-native'
import FormStyle from '@styles/FormStyle'
import { useEffect } from 'react'

export default function DateInput({
    onChange,
    onBlur,
    value,
    placeholder,
    setValue,
    name,
}) {
    const [update, setUpdate] = useState(true)

    if (update && value) {
        let newValue = ''
        if (value.length !== 3 && value.length !== 4) {
            value = value.replace(/[^0-9 /]/g, '')

            let valueArray = value.split('')
            valueArray.forEach((element, index) => {
                if (
                    !(
                        (index === 0 && parseInt(element) > 1) ||
                        (index === 1 &&
                            ((parseInt(valueArray[0]) === 1 &&
                                parseInt(element) > 2) ||
                                (parseInt(valueArray[0]) === 0 &&
                                    parseInt(element) === 0)))
                    )
                ) {
                    newValue += element
                }
            })
            if (newValue.length === 2) newValue += ' / '
        } else {
            newValue = value.substring(0, 2)
            setUpdate(false)
        }
        if (newValue !== value) setValue(name, newValue)
    } else {
        // setUpdate(true)
    }

    return (
        <TextInput
            style={FormStyle.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder={placeholder}
            keyboardType="phone-pad"
            maxLength={7}
        />
    )
}
