import React from 'react'
import { Text, Pressable, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { clearMessage } from '@slices/message'

import GlobalStyle from '@styles/GlobalStyle'
import AppStyle from '@styles/AppStyle'

export default function AppMessage({ message, messageType }) {
    const dispatch = useDispatch()
    const { t } = useTranslation()

    const onPress = async () => {
        dispatch(clearMessage())
    }

    return (
        <Pressable
            onPress={onPress}
            style={styles['type' + messageType + 'container']}
        >
            <Text style={styles['type' + messageType + 'text']}>
                {t(message)}
            </Text>
        </Pressable>
    )
}

const st = {}
for (let type in GlobalStyle.message) {
    st[type + 'container'] = {
        backgroundColor: GlobalStyle.message[type].backg,
        borderColor: GlobalStyle.message[type].border,
        borderWidth: 1,
        padding: 10,
    }
    st[type + 'text'] = {
        ...AppStyle.text,
        color: GlobalStyle.message[type].color,
    }
}

const styles = StyleSheet.create(st)
