import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import CategoryProducts from '@containers/CategoryProducts'

export default function ProductStoreScreen({ id }) {
    return (
        <View>
            <CategoryProducts 
                name={'Best sellers'}
            />
        </View>
    )
}
