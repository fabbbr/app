import React, { useState } from 'react'
import { View, TextInput, TouchableWithoutFeedback } from 'react-native'
import FormStyle from '../../styles/FormStyle'
import DateTimePicker from '@react-native-community/datetimepicker'

export default function DateInput({ onChange, onBlur, value, placeholder }) {
    const [date, setDate] = useState(new Date(1598051730000));
    const [show, setShow] = useState(false);

    const showDate = () => {
        console.log('show');
        setShow(true)
    }

    const onChange2 = (value) => {
        console.log('onchange 2', value);
    }

    return(
        <View>
            <View onPress={showDate}>
                <TextInput
                    style={FormStyle.input}
                    onBlur={onBlur}
                    value={value}
                    placeholder={placeholder}
                    editable={false}
                />
            </View>
            {show && (
            <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode='date'
                display="default"
                onChange={onChange2}
            />
        )}
        </View>
    )
}
