import React from 'react'
import { View, Text } from 'react-native'

import AppStyle from '@styles/AppStyle'
import GlobalStyle from '@styles/GlobalStyle'

export default function ContainerDefault({ children, title }) {
    return (
        <View style={styles.container}>
            <View style={styles.container_top}>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.container_bottom}>{children}</View>
        </View>
    )
}

const styles = {
    container: {
        flex: 1,
    },
    container_top: {
        backgroundColor: GlobalStyle.color.primary,
        paddingTop: 50,
        paddingBottom: 50,
        paddingLeft: GlobalStyle.container.padding,
        paddingRight: GlobalStyle.container.padding,
    },
    container_bottom: {
        paddingLeft: GlobalStyle.container.padding,
        paddingRight: GlobalStyle.container.padding,
        marginTop: -40,
    },
    title: {
        ...AppStyle.h2,
        color: GlobalStyle.color.light,
    },
}
