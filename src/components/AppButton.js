import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import ButtonStyle from '@styles/ButtonStyle'
import IconGoogle from '@icons/google.svg'


export default function AppButton({ type, text, onPress }) {
    if(type === undefined || !type.length) type = 'default'
    const type_text = type+'_text'

    let Icon
    switch(type) {
        case 'google': 
            Icon = <IconGoogle style={{marginRight: 10}} />
            break
    }

    return(
        <TouchableOpacity 
            onPress={onPress} 
            style={ButtonStyle[type]}
            activeOpacity={.8}
        >
            <View>
                {Icon}
            </View>
            <Text style={ButtonStyle[type_text]}>{text}</Text>
        </TouchableOpacity>
    )
}
