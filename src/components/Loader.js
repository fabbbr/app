import React from 'react'
import { StyleSheet, Text } from 'react-native'
import AnimatedLoader from 'react-native-animated-loader'

import GlobalStyle from '@styles/GlobalStyle'

export default function Loader({ width, height }) {
    return (
        <AnimatedLoader
            visible={true}
            overlayColor="rgba(255,255,255, 1)"
            animationStyle={{ ...styles.lottie, width, height }}
            speed={1}
            source={require('@assets/loader.json')}
        />
    )
}

const styles = StyleSheet.create({
    lottie: {
        // color: GlobalStyle.color.primary,
    },
})
