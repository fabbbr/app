import React from 'react'
import { TouchableOpacity, Text, View, ActivityIndicator } from 'react-native'
import ButtonStyle from '@styles/ButtonStyle'
import IconGoogle from '@icons/google.svg'

export default function AppButton({
    type,
    text,
    onPress,
    loading,
    uppercase,
    styles,
}) {
    if (type === undefined || !type.length) type = 'default'
    const type_text = type + '_text'

    let Icon
    switch (type) {
        case 'google':
            Icon = <IconGoogle style={{ marginRight: 10 }} />
            break
    }

    return (
        <TouchableOpacity
            onPress={onPress}
            style={{ ...ButtonStyle[type], ...(styles ? styles : {}) }}
            activeOpacity={0.8}
        >
            {loading ? (
                <ActivityIndicator
                    size="small"
                    color="#ddd"
                    style={{ marginRight: 10 }}
                />
            ) : null}
            <View>{Icon}</View>
            <Text
                style={{
                    ...ButtonStyle[type_text],
                    ...(uppercase ? { textTransform: 'uppercase' } : {}),
                }}
            >
                {text}
            </Text>
        </TouchableOpacity>
    )
}
