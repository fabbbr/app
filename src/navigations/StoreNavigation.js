import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import ProductStoreScreen from '@screens/store/ProductStoreScreen'
import AboutStoreScreen from '@screens/store/AboutStoreScreen'

const Tab = createMaterialTopTabNavigator()

export default function StoreNavigation({ id }) {
    return (
        <Tab.Navigator
            screenOptions={{
                swipeEnabled: false,
            }}
            tabBarOptions={{
                labelStyle: { textTransform: 'none' },
            }}
        >
            <Tab.Screen
                name="ProductStoreScreen"
                options={{ title: 'Articles' }}
            >
                {(props) => <ProductStoreScreen {...props} id={id} />}
            </Tab.Screen>
            <Tab.Screen name="AboutStoreScreen" options={{ title: 'A propos' }}>
                {(props) => <AboutStoreScreen {...props} id={id} />}
            </Tab.Screen>
        </Tab.Navigator>
    )
}
