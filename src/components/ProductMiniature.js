import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import GlobalStyle from '@styles/GlobalStyle'
import Flag from '@components/Flag'

export default function ProductMiniature({ product }) {
    return (
        <View style={styles.container}>
            <View style={styles.img}></View>
            <View style={styles.container2}>
                <Text style={styles.title}>{product.name}</Text>
                <View style={styles.container3}>
                    <Flag />
                    <View style={styles.vertical_lign}></View>
                    <Text style={styles.seller_name}>{product.seller_name}</Text>
                </View>
                <View style={styles.horizontal_lign}></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: GlobalStyle.color.lightgray,
        width: 240
    },
    container2: {
        padding: 10
    },
    img: {
        backgroundColor: 'red',
        height: 200,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    title: {

    },
    container3: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    vertical_lign: {
        backgroundColor: GlobalStyle.color.lightgray,
        width: 1,
        height: 20,
        marginHorizontal: 10
    },
    seller_name: {
        color: GlobalStyle.color.text2
    },
    horizontal_lign: {
        backgroundColor: GlobalStyle.color.lightgray,
        height: 1,
        marginTop: 8,
        marginBottom: 16
    }
})