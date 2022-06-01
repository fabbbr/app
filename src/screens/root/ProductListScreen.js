import React, { useEffect } from 'react'
import { ScrollView, Text, View } from 'react-native'

export default function ProductListScreen({ route }) {
    const { id_category, id_store, bs } = route.params

    return (
        <ScrollView>
            <Text>
                Id category: {id_category}, Id store: {id_store}, Best seller:{' '}
                {bs ? 'yes' : 'no'}
            </Text>
        </ScrollView>
    )
}
