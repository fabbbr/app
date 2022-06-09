import * as React from 'react'
import { useSelector } from 'react-redux'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTranslation } from 'react-i18next'
import { View, Text, StyleSheet } from 'react-native'

import * as Message from '@utils/Message'

import GlobalStyle from '@styles/GlobalStyle'
import HomeIcon from '@assets/icons/home.svg'
import CategoriesIcon from '@assets/icons/categories.svg'
import CartIcon from '@assets/icons/cart.svg'
import ProfileIcon from '@assets/icons/profile.svg'

import RootScreen from '@screens/RootScreen'
import CategoriesScreen from '@screens/CategoriesScreen'
import CartScreen from '@screens/CartScreen'
import ProfileScreen from '@screens/ProfileScreen'

const Tab = createBottomTabNavigator()

export default function BottomNavigation() {
    const { t } = useTranslation()
    const cart = useSelector((state) => state.cart)
    console.log(cart)

    let cartTotalQuantity = 0
    for (let id in cart.products) {
        cartTotalQuantity += cart.products[id].quantityInCart
    }

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    console.log(size)
                    switch (route.name) {
                        case 'Root':
                            return (
                                <HomeIcon width={20} height={20} fill={color} />
                            )
                        case 'Categories':
                            return (
                                <CategoriesIcon
                                    width={20}
                                    height={20}
                                    fill={color}
                                />
                            )
                        case 'Cart':
                            return (
                                <View>
                                    <CartIcon
                                        width={23}
                                        height={20}
                                        fill={color}
                                    />
                                    <Text
                                        style={{
                                            ...styles.cart_indicator,
                                            backgroundColor: color,
                                        }}
                                    >
                                        {cartTotalQuantity}
                                    </Text>
                                </View>
                            )
                        case 'Profile':
                            return (
                                <ProfileIcon
                                    width={20}
                                    height={20}
                                    fill={color}
                                />
                            )
                    }
                },
                tabBarActiveTintColor: GlobalStyle.color.primary,
                tabBarInactiveTintColor: GlobalStyle.color.text,
                tabBarStyle: {
                    paddingBottom: 5,
                },
                headerShown: false,
            })}
        >
            <Tab.Screen
                name="Root"
                component={RootScreen}
                options={{ title: t('home') }}
            />
            <Tab.Screen
                name="Categories"
                component={CategoriesScreen}
                options={{ title: t('categories') }}
            />
            <Tab.Screen
                name="Cart"
                component={CartScreen}
                options={{ title: t('cart') }}
                listeners={{
                    tabPress: (e) => {
                        if (!cartTotalQuantity) {
                            e.preventDefault()
                            Message.error({ text1: 'cart_empty' })
                        }
                    },
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{ title: t('profile') }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    cart_indicator: {
        position: 'absolute',
        bottom: -6,
        right: -6,
        fontSize: 9,
        lineHeight: 9,
        width: 16,
        height: 16,
        paddingTop: 4,
        textAlign: 'center',
        borderRadius: 10,
        color: GlobalStyle.color.light,
    },
})
