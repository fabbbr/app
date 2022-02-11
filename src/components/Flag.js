import React from 'react'
import { View } from 'react-native'
import { ucFirst } from '@utils/Tools'

import Fr from '@icons/flags/fr.svg'
const fr = Fr

export default function Flag({ code, width }) {
    if (!width) width = 25

    let Code = eval(code)

    return (
        <View
            style={{
                width: width,
                height: width * (2 / 3),
            }}
        >
            <Code />
        </View>
    )
}
