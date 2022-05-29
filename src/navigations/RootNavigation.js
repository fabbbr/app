import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from '@screens/root/HomeScreen'
import ProductScreen from '@screens/root/ProductScreen'
import StoreScreen from '@screens/root/StoreScreen'

const Stack = createNativeStackNavigator()

export default function HomeNavigation() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="ProductScreen" component={ProductScreen} />
            <Stack.Screen name="StoreScreen" component={StoreScreen} />
        </Stack.Navigator>
    )
}
