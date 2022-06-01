import React from 'react'
import {
    View,
    StyleSheet,
    ScrollView,
    Text,
    TouchableOpacity,
} from 'react-native'
import { useTranslation } from 'react-i18next'

import StoreHeader from '@screens/parts/store/StoreHeader'
import ListHeader from '@components/ListHeader'
import CategoryProducts from '@containers/CategoryProducts'
import GlobalStyle from '@styles/GlobalStyle'
import AppStyle from '@styles/AppStyle'

export default function ProductStoreScreen({ id, navigation }) {
    const { t } = useTranslation()

    const store = {
        name: 'Les bijoux de Margaux',
        location: 'Bordeaux, France',
        rating: 4.3,
        review: 233,
    }

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
            <StoreHeader store={store} />
            <View style={styles.content}>
                <CategoryProducts
                    name={t('best_sellers')}
                    id_store={id}
                    bs={true}
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
                                        navigateToProductList(category.id_cat)
                                    }
                                    key={index}
                                >
                                    <View style={styles.category_img}></View>
                                    <View>
                                        <Text style={styles.category_name}>
                                            {category.name}
                                        </Text>
                                        <Text style={styles.category_count}>
                                            {category.count} {t('articles')}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                </View>
            </View>
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
