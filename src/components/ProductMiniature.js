import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import GlobalStyle from '@styles/GlobalStyle'
import Flag from '@components/Flag'
import YellowStar from '@icons/yellow-star.svg'

export default function ProductMiniature({ product }) {
    return (
        <View style={styles.container}>
            <View style={styles.img}></View>
            <View style={styles.container2}>
                <Text style={styles.title}>{product.name}</Text>
                
                <View style={styles.container3}>
                    <Flag code={product.country} />
                    <View style={styles.vertical_lign}></View>
                    <Text style={styles.seller_name}>{product.seller_name}</Text>
                </View>
                
                <View style={styles.horizontal_lign}></View>

                <View style={styles.bottom}>
                    <View style={styles.bottom_left}>
                        <YellowStar style={styles.star} />
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
        width: 240
    },
    container2: {
        padding: 10
    },
    img: {
        backgroundColor: 'red',
        height: 240,
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
        marginVertical: 8
    },

    bottom: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    bottom_left: {
        flexDirection: 'row',
        padding: 5
    },
    star: {
        marginTop: 1
    },
    rating: {
        marginLeft: 5,
        color: GlobalStyle.color.text2
    },
    review: {
        marginLeft: 5,
        color: GlobalStyle.color.lightgray2
    },
    price: {
        color: GlobalStyle.color.primary,
        fontWeight: 'bold',
        backgroundColor: GlobalStyle.color.background,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5
    }
})