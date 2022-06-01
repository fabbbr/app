import * as React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import ProductMiniature from '@components/ProductMiniature'

export default function ProductsSlider({ products }) {
    return (
        <ScrollView
            horizontal={true}
            style={styles.container}
            showsHorizontalScrollIndicator={false}
        >
            {products.map((item, i) => {
                return <ProductMiniature product={item} key={i} />
            })}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 0,
        marginHorizontal: -5,
    },
})
