import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeProfileScreen from './Profile/HomeProfileScreen'
import LoginProfileScreen from './Profile/LoginProfileScreen'
import SigninProfileScreen from './Profile/SigninProfileScreen'

const Stack = createNativeStackNavigator()

export default function ProfileScreen() {
    return (
        <Stack.Navigator screenOptions = {{ headerShown: false }}>
            {/* <Stack.Screen name='HomeProfileScreen' component={HomeProfileScreen} /> */}
            {/* <Stack.Screen name='ProfileProfile' component={ProfileProfile} /> */}
            <Stack.Screen name='LoginProfileScreen' component={LoginProfileScreen} />
            <Stack.Screen name='SigninProfileScreen' component={SigninProfileScreen} />
        </Stack.Navigator>
    );
}
