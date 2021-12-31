import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import GlobalStyle from '@styles/GlobalStyle'
import Icon3lines from '@icons/title-3lines.svg'

export default function AppTitle({text, align, icon}) {
    if(align === undefined || !align.length) align = 'flex-start'

    let Icon
    switch(icon) {
        case '3lines': 
            Icon = <Icon3lines />
            break
    }
    

    return (
        <View style={{...styles.box, justifyContent: align}}>
            <Text style={{...styles.text}}>{text}</Text>
            <View style={styles.icon_box}>
                {Icon}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        flexDirection: 'row'
    },
    text: {
        color: GlobalStyle.color.primary,
        fontWeight: 'bold',
        fontSize: GlobalStyle.size.title,
        marginBottom: 10
    },
    icon_box: {
        marginLeft: 2
    }
})