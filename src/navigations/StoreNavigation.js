import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import ProductStoreScreen from '@screens/store/ProductStoreScreen'
import AboutStoreScreen from '@screens/store/AboutStoreScreen'
import GlobalStyle from '@styles/GlobalStyle'

const Tab = createMaterialTopTabNavigator()

export default function StoreNavigation({ id }) {
    return (
        <Tab.Navigator
            screenOptions={{
                swipeEnabled: false,
                tabBarLabelStyle: { textTransform: 'none' },
                tabBarIndicatorStyle: {
                    backgroundColor: GlobalStyle.color.primary,
                }
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
