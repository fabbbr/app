import React, { useState, useEffect, useRef } from 'react'
import { View, Text, StyleSheet, Pressable, Animated } from 'react-native'

import AppStyle from '@styles/AppStyle'
import GlobalStyle from '@styles/GlobalStyle'
import SmallArrowIcon from '@icons/small_arrow.svg'

export default function DropdownContent({ children, title, icon }) {
    const anim = useRef(new Animated.Value(0)).current
    const [open, setOpen] = useState(false)

    const toggleOpen = () => {
        let curr = !open
        setOpen(curr)
        if (curr) {
            Animated.timing(anim, {
                toValue: 1,
                duration: 300,
                useNativeDriver: false,
            }).start()
        } else {
            Animated.timing(anim, {
                toValue: 0,
                duration: 300,
                useNativeDriver: false,
            }).start()
        }
    }

    const spin = anim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '90deg'],
    })
    const height = anim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0%', '100%'],
    })

    return (
        <View style={styles.container}>
            <Pressable style={styles.header_container} onPress={toggleOpen}>
                <View style={styles.header_left}>
                    {icon}
                    <Text style={styles.title}>{title}</Text>
                </View>
                <Animated.View style={{ transform: [{ rotate: spin }] }}>
                    <SmallArrowIcon />
                </Animated.View>
            </Pressable>
            <Animated.View style={{ maxHeight: height }}>
                <View style={styles.content}>
                    {children}
                </View>
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {},
    header_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: GlobalStyle.color.lightgray,
        paddingHorizontal: 15,
        paddingVertical: 15,
    },
    header_left: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        marginLeft: 10,
        color: GlobalStyle.color.dark,
        fontSize: 15,
        fontWeight: 'bold',
    },
    content: {
        paddingHorizontal: 15,
        marginBottom: 10,
    },
})
