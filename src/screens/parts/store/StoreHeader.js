import React from 'react'
import { useTranslation } from 'react-i18next'
import { View, Text, StyleSheet } from 'react-native'

import RatingReview from '@components/RatingReview'
import GlobalStyle from '@styles/GlobalStyle'
import AppStyle from '@styles/AppStyle'

export default function StoreHeader({ store }) {
    const { t } = useTranslation()

    return (
        <View style={styles.container}>
            <View style={styles.bg_top}></View>
            <View style={styles.bg_img}></View>

            <View style={styles.content}>
                <Text style={styles.title}>{store.name}</Text>
                <View style={styles.bottom_row}>
                    <Text style={AppStyle.text}>{store.city}</Text>
                    <View style={styles.vertical_lign}></View>
                    <RatingReview
                        rating={store.rating}
                        review={store.review}
                        with_text={true}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {},
    bg_top: {
        backgroundColor: '#C4C4C4',
        height: 90,
    },
    bg_img: {
        backgroundColor: '#EBEBEB',
        width: 80,
        height: 80,
        marginTop: -60,
        marginLeft: 20,
        borderColor: GlobalStyle.color.light,
        borderWidth: 1,
        borderRadius: 2,
    },
    content: {
        padding: GlobalStyle.container.padding,
    },
    title: {
        ...AppStyle.text,
        color: GlobalStyle.color.dark,
        fontSize: 16,
    },
    bottom_row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    vertical_lign: {
        backgroundColor: GlobalStyle.color.lightgray,
        width: 1,
        height: 16,
        marginHorizontal: 10,
    },
})
