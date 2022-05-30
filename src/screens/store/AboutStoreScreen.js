import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

import StoreHeader from '@screens/parts/store/StoreHeader'
import GlobalStyle from '@styles/GlobalStyle'

export default function AboutStoreScreen({ id }) {
    const store = {
        name: 'Les bijoux de Margaux',
        location: 'Bordeaux, France',
        rating: 4.3,
        review: 233,
    }

    return (
        <ScrollView style={styles.container}>
            <StoreHeader store={store} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: GlobalStyle.color.light,
        flex: 1,
    },
})
