import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useTranslation } from 'react-i18next'

import YellowStarIcon from '@icons/yellow-star.svg'
import AppStyle from '@styles/AppStyle'
import GlobalStyle from '@styles/GlobalStyle'

export default function RatingReview({ rating, review, with_text }) {
    const { t } = useTranslation()

    return (
        <View style={styles.container}>
            <YellowStarIcon />
            <Text style={styles.rating}>{rating}</Text>
            <Text style={styles.review}>
                ({review}
                {with_text ? ' ' + t('avis') : ''})
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    rating: {
        ...AppStyle.text,
        marginLeft: 5,
    },
    review: {
        ...AppStyle.text,
        marginLeft: 5,
        color: GlobalStyle.color.lightgray2,
    },
})
