import React, { useEffect, useState } from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'

import CategoryService from '@services/category'
import ProductService from '@services/product'
import ProductMiniature from '@components/ProductMiniature'
import Loading from '@containers/Loading'
import * as Message from '@utils/Message'
import GlobalStyle from '@styles/GlobalStyle'

export default function ProductListScreen({ route }) {
    const { id_category, id_store, bs } = route.params
    const [data, setData] = useState(false)

    useEffect(() => {
        setData(false)
        const getProducts = async () => {
            try {
                if (id_category && !id_store) {
                    const d = await CategoryService.getCategory(id_category)
                    setData(d)
                } else if (id_store && !id_category) {
                    const d = await ProductService.getProductsBystore(id_store)
                    setData(d)
                }
            } catch (error) {
                Message.error({ text1: error })
            }
        }
        getProducts()
    }, [id_store, id_category, bs])

    return (
        <ScrollView style={styles.container}>
            <Loading data={data}>
                <View style={styles.container2}>
                    {/* <Text>
                        Id category: {id_category}, Id store: {id_store}, Best
                        seller: {bs ? 'yes' : 'no'}
                    </Text> */}
                    {data && data.products
                        ? data.products.map((product, index) => {
                              return (
                                  <ProductMiniature
                                      product={product}
                                      key={index}
                                      type="alt"
                                      format={true}
                                  />
                              )
                          })
                        : false}
                </View>
            </Loading>
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
