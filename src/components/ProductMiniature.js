import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Flag from '@components/Flag'
import RatingReview from '@components/RatingReview'
import GlobalStyle from '@styles/GlobalStyle'
import AppStyle from '@styles/AppStyle'

export default function ProductMiniature({ product, type = 'default' }) {
    const navigation = useNavigation()

    const onPress = () => {
        navigation.navigate('ProductScreen', { id: product.id })
    }

    return (
        <TouchableOpacity
            style={type === 'default' ? styles.container : styles.alt_container}
            activeOpacity={0.8}
            onPress={onPress}
        >
            <Image
                source={{ uri: product.image }}
                style={type === 'default' ? styles.img : styles.alt_img}
            />

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
                        <RatingReview
                            rating={product.rating}
                            review={product.review}
                        />
                    </View>
                    <View>
                        <Text style={styles.price}>{product.price} €</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: GlobalStyle.color.lightgray,
        backgroundColor: GlobalStyle.color.light,
        overflow: 'hidden',
        width: 240,
    },
    alt_container: {
        margin: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: GlobalStyle.color.lightgray,
        backgroundColor: GlobalStyle.color.light,
        overflow: 'hidden',
        width: '98%',
    },
    container2: {
        padding: 10,
        paddingTop: 15,
    },
    img: {
        backgroundColor: 'lightgray',
        width: 240,
        height: 240,
    },
    alt_img: {
        backgroundColor: 'lightgray',
        height: 240,
    },
    container3: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    vertical_lign: {
        backgroundColor: GlobalStyle.color.lightgray,
        width: 1,
        height: 20,
        marginHorizontal: 10,
    },
    horizontal_lign: {
        backgroundColor: GlobalStyle.color.lightgray,
        height: 1,
        marginVertical: 8,
    },

    bottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bottom_left: {
        flexDirection: 'row',
        padding: 5,
        marginTop: 2,
    },
    price: {
        ...AppStyle.h3_bold,
        color: GlobalStyle.color.primary,
        backgroundColor: GlobalStyle.color.background,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
})
