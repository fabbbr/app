import * as React from 'react'
import { Text } from 'react-native'

export default function ProductHomeScreen({ route }) {
    const { id } = route.params

    return (
        <>
            <Text>Product id: {id}</Text>
        </>
    )
}
