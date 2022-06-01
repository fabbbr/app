import React, { useEffect } from 'react'
import { ScrollView, Text, View, StyleSheet } from 'react-native'

import ProductMiniature from '@components/ProductMiniature'
import GlobalStyle from '@styles/GlobalStyle'

export default function ProductListScreen({ route }) {
    const { id_category, id_store, bs } = route.params

    const data = require('../../test_data/home_category_products.json')
    console.log(data)

    return (
        <ScrollView style={styles.container}>
            <View style={styles.container2}>
                <Text>
                    Id category: {id_category}, Id store: {id_store}, Best
                    seller: {bs ? 'yes' : 'no'}
                </Text>
                {data.map((product, index) => {
                    return (
                        <ProductMiniature
                            product={product}
                            key={index}
                            type="alt"
                        />
                    )
                })}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container2: {
        padding: GlobalStyle.container.padding,
    },
    test: {
        width: 250,
        height: 250,
        backgroundColor: 'red',
    },
})
