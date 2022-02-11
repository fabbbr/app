import * as React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'

import Flag from '@components/Flag'

import StoreIcon from '@icons/store.svg'
import YellowStarIcon from '@icons/yellow-star.svg'
import GlobalStyle from '@styles/GlobalStyle'
import AppStyle from '@styles/AppStyle'
import HomeStyle from '@styles/HomeStyle'

export default function ProductHomeScreen({ route }) {
    const { t } = useTranslation()
    const { id } = route.params
    const navigation = useNavigation()

    const product = require('../../test_data/product.json')

    const navigateTostore = () => {
        navigation.navigate('storeScreen', { id: product.store.id })
    }

    return (
        <View style={HomeStyle.container}>
            <View style={styles.container_bottom}>
                <View style={styles.container_title}>
                    <Text style={AppStyle.h2}>{product.name}</Text>
                    <Text style={styles.price}>{product.price} €</Text>
                </View>

                <View style={styles.container_score}>
                    <YellowStarIcon />
                    <Text style={styles.rating}>{product.rating}</Text>
                    <Text style={styles.review}>({product.review})</Text>
                </View>
                <View style={styles.container_store_info}>
                    <View style={styles.container_store}>
                        <Flag code={product.country} />
                        <View style={styles.vertical_lign}></View>
                        <Text style={AppStyle.text}>{product.store.name}</Text>
                    </View>

                    <TouchableOpacity
                        style={styles.store_link}
                        activeOpacity={0.8}
                        onPress={navigateTostore}
                    >
                        <StoreIcon style={styles.store_icon} />
                        <Text style={styles.store_link_text}>
                            {t('view_store')}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.horizontal_lign}></View>

                <View style={styles.block_desc}>
                    <Text style={styles.page_title}>{t('description')}</Text>
                    <Text>{product.description}</Text>
                </View>
                <View style={styles.block_desc}>
                    <Text style={styles.page_title}>
                        {t('store_information')}
                    </Text>
                    <Text>{product.store.description}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container_bottom: {
        padding: 15,
    },
    container_title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    price: {
        ...AppStyle.h2_bold,
        color: GlobalStyle.color.primary,
        backgroundColor: GlobalStyle.color.background,
        paddingVertical: 7,
        paddingHorizontal: 12,
        borderRadius: 5,
    },
    container_score: {
        flexDirection: 'row',
        padding: 5,
        marginTop: -5,
    },
    rating: {
        ...AppStyle.text,
        marginLeft: 5,
    },
    review: {
        ...AppStyle.text,
        marginLeft: 5,
        color: GlobalStyle.color.lightgray2,
    },
    container_store_info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
    },
    container_store: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    vertical_lign: {
        backgroundColor: GlobalStyle.color.lightgray,
        width: 1,
        height: 20,
        marginHorizontal: 10,
    },
    store_link: {
        flexDirection: 'row',
    },
    store_icon: {
        marginTop: 2,
        marginRight: 5,
    },
    store_link_text: {
        ...AppStyle.text,
        color: GlobalStyle.color.primary,
    },
    horizontal_lign: {
        backgroundColor: GlobalStyle.color.lightgray,
        height: 1,
        marginVertical: 8,
    },
    page_title: {
        ...AppStyle.h3,
        marginVertical: 5,
    },
    block_desc: {
        marginVertical: 10,
    },
})
