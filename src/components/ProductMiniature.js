import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import Flag from '@components/Flag'
import YellowStar from '@icons/yellow-star.svg'
import GlobalStyle from '@styles/GlobalStyle'
import AppStyle from '@styles/AppStyle'


export default function ProductMiniature({ product }) {
    return (
        <View style={styles.container}>
            <View style={styles.img}></View>
            <View style={styles.container2}>
                <Text style={AppStyle.h3}>{product.name}</Text>
                
                <View style={styles.container3}>
                    <Flag code={product.country} />
                    <View style={styles.vertical_lign}></View>
                    <Text style={AppStyle.text}>{product.seller_name}</Text>
                </View>
                
                <View style={styles.horizontal_lign}></View>

                <View style={styles.bottom}>
                    <View style={styles.bottom_left}>
                        <YellowStar />
                        <Text style={styles.rating}>{product.rating}</Text>
                        <Text style={styles.review}>({product.review})</Text>
                    </View>
                    <View>
                        <Text style={styles.price}>{product.price} €</Text>
                    </View>
                </View>
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
        overflow: 'hidden',
        width: 240
    },
    container2: {
        padding: 10,
        paddingTop: 15
    },
    img: {
        backgroundColor: 'lightgray',
        height: 240
    },
    container3: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    },
    vertical_lign: {
        backgroundColor: GlobalStyle.color.lightgray,
        width: 1,
        height: 20,
        marginHorizontal: 10
    },
    horizontal_lign: {
        backgroundColor: GlobalStyle.color.lightgray,
        height: 1,
        marginVertical: 8
    },

    bottom: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    bottom_left: {
        flexDirection: 'row',
        padding: 5,
        marginTop: 2
    },
    rating: {
        ...AppStyle.text,
        marginLeft: 5
    },
    review: {
        ...AppStyle.text,
        marginLeft: 5,
        color: GlobalStyle.color.lightgray2
    },
    price: {
        ...AppStyle.h3_bold,
        color: GlobalStyle.color.primary,
        backgroundColor: GlobalStyle.color.background,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5
    }
}) 