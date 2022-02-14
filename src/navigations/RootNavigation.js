import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from '@screens/root/HomeScreen'
import ProductScreen from '@screens/root/ProductScreen'

const Stack = createNativeStackNavigator()

export default function HomeNavigation() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="ProductScreen" component={ProductScreen} />
        </Stack.Navigator>
    )
}
