import * as React from 'react'
import { useSelector } from 'react-redux'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AntDesign } from '@expo/vector-icons'
import { useTranslation } from 'react-i18next'

import GlobalStyle from '@styles/GlobalStyle'

import RootScreen from '@screens/RootScreen'
import CategoriesScreen from '@screens/CategoriesScreen'
import CartScreen from '@screens/CartScreen'
import ProfileScreen from '@screens/ProfileScreen'

const Tab = createBottomTabNavigator()

export default function BottomNavigation() {
    const { t } = useTranslation()
    const cart = useSelector((state) => state.cart)

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    switch (route.name) {
                        case 'Root':
                            return (
                                <AntDesign
                                    name="home"
                                    size={size}
                                    color={color}
                                />
                            )
                        case 'Categories':
                            return (
                                <AntDesign
                                    name="search1"
                                    size={size}
                                    color={color}
                                />
                            )
                        case 'Cart':
                            return (
                                <AntDesign
                                    name="shoppingcart"
                                    size={size}
                                    color={color}
                                />
                            )
                        case 'Profile':
                            return (
                                <AntDesign
                                    name="user"
                                    size={size}
                                    color={color}
                                />
                            )
                    }
                },
                tabBarActiveTintColor: GlobalStyle.color.primary,
                tabBarInactiveTintColor: GlobalStyle.color.text,
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
                        if (Object.keys(cart.products).length === 0)
                            e.preventDefault()
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
