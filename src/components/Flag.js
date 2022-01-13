import React from 'react'
import { View, Text } from 'react-native'

export default function Flag({ code, width }) {
    if(!width) width = 25

    console.log(width)

    return (
        <View style={{
            width: width,
            height: width * (2/3),
            backgroundColor: 'blue'
        }}>
        </View>
    )
}