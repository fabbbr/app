import React from 'react'
import { Image } from 'react-native'

export default function SliderItem({ url, width, height }) {
    return <Image source={{ uri: url }} style={{ width, height }} />
}
