import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeCartScreen from '@screens/cart/HomeCartScreen'
import AddressCartScreen from '@screens/cart/AddressCartScreen'
import CheckoutCartScreen from '@screens/cart/CheckoutCartScreen'

const Stack = createNativeStackNavigator()

export default function CartNavigation() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeCartScreen" component={HomeCartScreen} />
            <Stack.Screen
                name="AddressCartScreen"
                component={AddressCartScreen}
            />
            <Stack.Screen
                name="CheckoutCartScreen"
                component={CheckoutCartScreen}
            />
        </Stack.Navigator>
    )
}
