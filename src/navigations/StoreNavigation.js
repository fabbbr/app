import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import ProductStoreScreen from '@screens/store/ProductStoreScreen'
import AboutStoreScreen from '@screens/store/AboutStoreScreen'


const Tab = createMaterialTopTabNavigator()

export default function StoreNavigation({ id }) {
    return (
        <Tab.Navigator screenOptions={{
            swipeEnabled: false
        }}>
            <Tab.Screen name="ProductStoreScreen">
                {props => <ProductStoreScreen {...props} id={id} />}
            </Tab.Screen>
            <Tab.Screen name="AboutStoreScreen">
                {props => <AboutStoreScreen {...props} id={id} />}
            </Tab.Screen>
        </Tab.Navigator>
    )
}