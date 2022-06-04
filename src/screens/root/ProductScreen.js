import React, { useEffect, useState } from 'react'
import {
    Text,
    ScrollView,
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'

import Flag from '@components/Flag'
import Slider from '@components/Slider'
import AppButton from '@components/AppButton'
import DropdownContent from '@containers/DropdownContent'
import RatingReview from '@components/RatingReview'
import Loading from '@containers/Loading'
import { formatProduct } from '@utils/Tools'

import ProductService from '@services/product'
import { addProduct } from '@slices/cart'

import StoreIcon from '@icons/store.svg'
import BoxIcon from '@icons/box.svg'
import GlobalStyle from '@styles/GlobalStyle'
import AppStyle from '@styles/AppStyle'
import HomeStyle from '@styles/HomeStyle'

export default function ProductHomeScreen({ route }) {
    const { t } = useTranslation()
    const { id } = route.params
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const [product, setProduct] = useState(false)

    useEffect(() => {
        setProduct(false)
        const getProduct = async () => {
            try {
                const d = await ProductService.getProduct(id)
                setProduct(formatProduct(d))
            } catch (error) {
                console.log(error)
            }
        }
        getProduct()
    }, [id])

    const navigateTostore = () => {
        navigation.navigate('StoreScreen', {
            screen: 'ProductStoreScreen',
            id: product.store.id,
        })
    }

    const sendMessage = () => {
        // navigation.navigate('messageScreen', { store: product.store.id })
        console.log('send message')
    }

    const addToCart = () => {
        dispatch(addProduct({ product, quantity: 1, from_page: true }))
    }

    return (
        <View style={styles.container}>
            <Loading data={product}>
                {product && (
                    <>
                        <ScrollView style={HomeStyle.container}>
                            <Slider items={product.images} />
                            <View style={styles.container_bottom}>
                                <View style={styles.container_title}>
                                    <Text style={AppStyle.h2}>
                                        {product.name}
                                    </Text>
                                    <Text style={styles.price}>
                                        {product.price} €
                                    </Text>
                                </View>
                                <View style={styles.container_score}>
                                    <RatingReview
                                        rating={product.rating}
                                        review={product.review}
                                        with_text={true}
                                    />
                                </View>

                                <View style={styles.container_store_info}>
                                    <View style={styles.container_store}>
                                        <Flag code={product.country} />
                                        <View
                                            style={styles.vertical_lign}
                                        ></View>
                                        <Text style={AppStyle.text}>
                                            {product.store.name}
                                        </Text>
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
                                    <Text style={styles.page_title}>
                                        {t('description')}
                                    </Text>
                                    <Text>{product.description}</Text>
                                </View>
                            </View>
                            <DropdownContent
                                title={t('store_information')}
                                icon={<BoxIcon />}
                            >
                                <Text>{product.store.description}</Text>
                            </DropdownContent>
                            <View style={styles.horizontal_lign_bottom}></View>
                            {/* <View style={{ marginBottom: 300 }}></View> */}
                        </ScrollView>

                        <View style={styles.container_footer}>
                            <View style={styles.horizontal_lign_bottom}></View>
                            <View style={styles.container_action}>
                                <View style={styles.button_action}>
                                    <AppButton
                                        text={t('send_message')}
                                        type="outlined_medium"
                                        uppercase
                                        onPress={sendMessage}
                                    />
                                </View>
                                <View style={styles.button_action}>
                                    <AppButton
                                        text={t('buy')}
                                        type="default_medium"
                                        uppercase
                                        onPress={addToCart}
                                    />
                                </View>
                            </View>
                        </View>
                    </>
                )}
            </Loading>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
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
        paddingLeft: 0,
        marginTop: -5,
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
    container_footer: {
        paddingTop: 5,
        backgroundColor: GlobalStyle.color.light,
    },
    container_action: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    button_action: {
        flex: 1,
        paddingHorizontal: 8,
        paddingVertical: 15,
    },
    horizontal_lign_bottom: {
        backgroundColor: GlobalStyle.color.lightgray,
        height: 1,
    },
})
