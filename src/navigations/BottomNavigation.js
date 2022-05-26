import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AntDesign } from '@expo/vector-icons'

import GlobalStyle from '@styles/GlobalStyle'
import RootScreen from '@screens/RootScreen'
import SearchScreen from '@screens/SearchScreen'
import SellScreen from '@screens/SellScreen'
import CartScreen from '@screens/CartScreen'
import ProfileScreen from '@screens/ProfileScreen'

const Tab = createBottomTabNavigator()

export default function BottomNavigation() {
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
                        case 'Search':
                            return (
                                <AntDesign
                                    name="search1"
                                    size={size}
                                    color={color}
                                />
                            )
                        case 'Sell':
                            return (
                                <AntDesign
                                    name="pluscircleo"
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
            <Tab.Screen name="Root" component={RootScreen} />
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="Sell" component={SellScreen} />
            <Tab.Screen name="Cart" component={CartScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    )
}
