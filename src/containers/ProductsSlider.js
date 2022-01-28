import * as React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import ProductMiniature from '@components/ProductMiniature'

export default function ProductsSlider({ products }) {
    const items = products.map((item, i) => <ProductMiniature product={item} key={i} />)

    return (
        <ScrollView 
            horizontal={true} 
            style={styles.container}
            showsHorizontalScrollIndicator={false}
        >
            {items}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 0,
        marginHorizontal: -5
    }
})