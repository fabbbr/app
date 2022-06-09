import React, { useState, useEffect } from 'react'
import {
    View,
    StyleSheet,
    ScrollView,
    Text,
    TouchableOpacity,
} from 'react-native'
import { useTranslation } from 'react-i18next'

import Loading from '@containers/Loading'
import StoreService from '@services/store'

import StoreHeader from '@screens/parts/store/StoreHeader'
import ListHeader from '@components/ListHeader'
import CategoryProducts from '@containers/CategoryProducts'
import * as Message from '@utils/Message'
import GlobalStyle from '@styles/GlobalStyle'
import AppStyle from '@styles/AppStyle'

export default function ProductStoreScreen({ id, navigation }) {
    const { t } = useTranslation()
    const [store, setStore] = useState(false)

    useEffect(() => {
        setStore(false)
        const getStore = async () => {
            try {
                const d = await StoreService.getStore(id)
                if (d) {
                    d.rating = 4.3
                    d.reviews = 233
                    d.products = d.products.map((product) => {
                        return {
                            ...product,
                            store: { lang: d.lang, name: d.name },
                        }
                    })
                }
                setStore(d)
            } catch (error) {
                Message.error({ text1: error })
            }
        }
        getStore()
    }, [id])

    let categories = []
    for (let i = 0; i < 8; i++) {
        categories.push({ name: 'Bijoux', count: 2, id_cat: 1, id_store: id })
    }

    const navigateToProductList = () => {
        navigation.navigate('Root', {
            screen: 'ProductListScreen',
            params: { id_store: id },
        })
    }

    return (
        <ScrollView style={styles.container}>
            <Loading data={store}>
                {store && (
                    <>
                        <StoreHeader store={store} />
                        <View style={styles.content}>
                            <CategoryProducts
                                name={t('best_sellers')}
                                id_store={id}
                                bs={true}
                                products={store.products}
                            />
                            <View>
                                <ListHeader
                                    name={t('all_products')}
                                    onPress={navigateToProductList}
                                />
                                <View style={styles.categories}>
                                    {categories.map((category, index) => {
                                        return (
                                            <TouchableOpacity
                                                activeOpacity={0.8}
                                                style={styles.category}
                                                onPress={() =>
                                                    navigateToProductList(
                                                        category.id_cat
                                                    )
                                                }
                                                key={index}
                                            >
                                                <View
                                                    style={styles.category_img}
                                                ></View>
                                                <View>
                                                    <Text
                                                        style={
                                                            styles.category_name
                                                        }
                                                    >
                                                        {category.name}
                                                    </Text>
                                                    <Text
                                                        style={
                                                            styles.category_count
                                                        }
                                                    >
                                                        {category.count}{' '}
                                                        {t('articles')}
                                                    </Text>
                                                </View>
                                            </TouchableOpacity>
                                        )
                                    })}
                                </View>
                            </View>
                        </View>
                    </>
                )}
            </Loading>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: GlobalStyle.color.light,
        flex: 1,
    },
    content: {
        backgroundColor: GlobalStyle.color.background,
        padding: GlobalStyle.container.padding,
    },
    categories: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    category: {
        backgroundColor: GlobalStyle.color.light,
        borderWidth: 1,
        borderColor: GlobalStyle.color.lightgray,
        width: '47%',
        marginBottom: 15,
        flexDirection: 'row',
        padding: 8,
        borderRadius: 3,
    },
    category_img: {
        backgroundColor: GlobalStyle.color.lightgray,
        width: 30,
        height: 30,
        borderRadius: 50,
        marginRight: 5,
    },
    category_name: {
        fontSize: 16,
    },
    category_count: {
        ...AppStyle.text,
        color: GlobalStyle.color.lightgray2,
        fontSize: 13,
    },
})
