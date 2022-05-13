import * as React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import Flag from '@components/Flag'
import { addProduct, removeProduct, deleteProduct } from '@slices/cart'

import AppStyle from '@styles/AppStyle'
import GlobalStyle from '@styles/GlobalStyle'
import { t } from 'i18next'

export default function CartProduct({ product_id }) {
    const dispatch = useDispatch()

    const product = useSelector((state) => state.cart.products[product_id])

    const removeProductCart = () => {
        console.log('remove from cart')
        dispatch(removeProduct({ product, quantity: 1 }))
    }
    const addProductCart = () => {
        console.log('add to cart')
        dispatch(addProduct({ product, quantity: 1 }))
    }
    const deleteProductCart = () => {
        console.log('delete from cart')
        dispatch(deleteProduct({ product }))
    }

    return (
        <View style={styles.container}>
            <Image source={{ uri: product.images[0] }} style={styles.img} />
            <View style={styles.container_right}>
                <View style={styles.container_product_info}>
                    <Text>{product.name}</Text>
                    <Text style={styles.price}>{product.price} €</Text>
                </View>
                <View style={styles.container_store_info}>
                    <Flag code={product.country} />
                    <View style={styles.vertical_lign}></View>
                    <Text style={AppStyle.text}>{product.store.name}</Text>
                </View>
                <View style={styles.container_action}>
                    <View style={styles.quantity_action}>
                        <TouchableOpacity
                            style={styles.remove_product}
                            activeOpacity={0.8}
                            onPress={removeProductCart}
                        >
                            <Text style={styles.remove_product_text}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.product_quantity}>
                            {product.quantity}
                        </Text>
                        <TouchableOpacity
                            style={styles.add_product}
                            activeOpacity={0.8}
                            onPress={addProductCart}
                        >
                            <Text style={styles.add_product_text}>+</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={deleteProductCart}
                    >
                        <Text style={styles.delete_product}>{t('Delete')}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    container_right: {
        flex: 1,
    },
    container_product_info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    container_store_info: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    container_action: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },

    img: {
        backgroundColor: 'lightgray',
        width: 80,
        height: 80,
        marginRight: 10,
    },
    price: {
        fontWeight: 'bold',
    },
    vertical_lign: {
        backgroundColor: GlobalStyle.color.lightgray,
        width: 1,
        height: 20,
        marginHorizontal: 10,
    },

    quantity_action: {
        flexDirection: 'row',
    },
    remove_product: {
        backgroundColor: GlobalStyle.color.lightgray3,
        width: 24,
        height: 24,
        alignItems: 'center',
        borderRadius: 5,
    },
    remove_product_text: {
        color: GlobalStyle.color.text,
        fontSize: 24,
        lineHeight: 24,
    },
    add_product: {
        backgroundColor: GlobalStyle.color.primary,
        width: 24,
        height: 24,
        alignItems: 'center',
        borderRadius: 5,
    },
    add_product_text: {
        color: GlobalStyle.color.light,
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 21,
    },
    product_quantity: {
        marginHorizontal: 10,
        fontWeight: 'bold',
    },
    delete_product: {
        color: GlobalStyle.color.primary,
    },
})
