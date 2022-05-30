import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import StoreHeader from '@screens/parts/store/StoreHeader'
import CategoryProducts from '@containers/CategoryProducts'

export default function ProductStoreScreen({ id }) {
    const store = {
        name: 'Les bijoux de Margaux',
        location: 'Bordeaux, France',
        rating: 4.3,
        review: 233,
    }

    return (
        <View>
            <CategoryProducts name={'Best sellers'} />
        </View>
    )
}
