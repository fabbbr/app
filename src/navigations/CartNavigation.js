import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeCartScreen from '@screens/cart/HomeCartScreen'

const Stack = createNativeStackNavigator()

export default function CartNavigation() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeCartScreen" component={HomeCartScreen} />
        </Stack.Navigator>
    )
}
