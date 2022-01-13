import * as React from 'react'
import { ScrollView, Text } from 'react-native'
import ProductMiniature from '@components/ProductMiniature'

export default function ProductsSlider({ products }) {
    console.log(products)
    const items = products.map((item, i) => <ProductMiniature product={item} key={i} />)

    return (
        <ScrollView 
            horizontal={true} 
            style={{flexGrow: 0}}
            showsHorizontalScrollIndicator={false}
        >
            {items}
        </ScrollView>
    )
}