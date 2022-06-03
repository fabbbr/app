import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useTranslation } from 'react-i18next'
import { getHeaderTitle } from '@react-navigation/elements'

import HomeScreen from '@screens/root/HomeScreen'
import ProductScreen from '@screens/root/ProductScreen'
import StoreScreen from '@screens/root/StoreScreen'
import ProductListScreen from '@screens/root/ProductListScreen'
import DefaultHeader from '@navigations/DefaultHeader'

const Stack = createNativeStackNavigator()

export default function HomeNavigation() {
    const { t } = useTranslation()

    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            defaultNavigationOptions={{ headerTitleAlign: 'center' }}
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen
                name="ProductScreen"
                component={ProductScreen}
                options={{ ...config, title: t('product_screen') }}
            />
            <Stack.Screen
                name="StoreScreen"
                component={StoreScreen}
                options={{ ...config, title: t('store_screen') }}
            />
            <Stack.Screen
                name="ProductListScreen"
                component={ProductListScreen}
            />
        </Stack.Navigator>
    )
}

const config = {
    headerShown: true,
    header: ({ navigation, route, options, back }) => {
        return (
            <DefaultHeader
                navigation={navigation}
                route={route}
                options={options}
                back={back}
            />
        )
    },
}
