import React from 'react'
import { View } from 'react-native'
import { ucFirst } from '@utils/Tools'

import Fr from '@icons/flags/fr.svg'
import Pl from '@icons/flags/pl.svg'
import It from '@icons/flags/it.svg'

const fr = Fr
const pl = Pl
const it = It

export default function Flag({ code, width }) {
    if (!width) width = 25

    let Code = code ? eval(code.toLowerCase()) : Fr

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
