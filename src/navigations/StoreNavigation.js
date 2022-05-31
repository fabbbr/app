import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { useTranslation } from 'react-i18next'

import ProductStoreScreen from '@screens/store/ProductStoreScreen'
import AboutStoreScreen from '@screens/store/AboutStoreScreen'
import GlobalStyle from '@styles/GlobalStyle'

const Tab = createMaterialTopTabNavigator()

export default function StoreNavigation({ id }) {
    const { t } = useTranslation()

    return (
        <Tab.Navigator
            screenOptions={{
                swipeEnabled: false,
                tabBarLabelStyle: { textTransform: 'none' },
                tabBarIndicatorStyle: {
                    backgroundColor: GlobalStyle.color.primary,
                },
            }}
        >
            <Tab.Screen
                name="ProductStoreScreen"
                options={{ title: t('articles2') }}
            >
                {(props) => <ProductStoreScreen {...props} id={id} />}
            </Tab.Screen>
            <Tab.Screen name="AboutStoreScreen" options={{ title: t('about') }}>
                {(props) => <AboutStoreScreen {...props} id={id} />}
            </Tab.Screen>
        </Tab.Navigator>
    )
}
