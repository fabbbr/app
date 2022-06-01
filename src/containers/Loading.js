import React from 'react'
import { View } from 'react-native'
import Loader from '@components/Loader'

export default function Loading({ children, data }) {
    if (data) {
        return <View>{children}</View>
    } else {
        return <Loader width={200} height={200} />
    }
}
