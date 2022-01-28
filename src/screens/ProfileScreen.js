import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeProfileScreen from '@screens/Profile/HomeProfileScreen'
import LoginProfileScreen from '@screens/Profile/LoginProfileScreen'
import SigninProfileScreenStep1 from '@screens/Profile/SigninProfileScreenStep1'
import SigninProfileScreenStep2 from '@screens/Profile/SigninProfileScreenStep2'

const Stack = createNativeStackNavigator()

export default function ProfileScreen() {
    return (
        <Stack.Navigator screenOptions = {{ headerShown: false }}>
            <Stack.Screen name='HomeProfileScreen' component={HomeProfileScreen} />
            <Stack.Screen name='LoginProfileScreen' component={LoginProfileScreen} />
            <Stack.Screen name='SigninProfileScreenStep1' component={SigninProfileScreenStep1} />
            <Stack.Screen name='SigninProfileScreenStep2' component={SigninProfileScreenStep2} />
        </Stack.Navigator>
    )
}
