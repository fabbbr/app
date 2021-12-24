import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeProfileScreen from '@screens/Profile/HomeProfileScreen'
import LoginProfileScreen from '@screens/Profile/LoginProfileScreen'
import SigninProfileScreen1 from '@screens/Profile/SigninProfileScreen1'
import SigninProfileScreen2 from '@screens/Profile/SigninProfileScreen2'

const Stack = createNativeStackNavigator()

export default function ProfileScreen() {
    return (
        <Stack.Navigator screenOptions = {{ headerShown: false }}>
            {/* <Stack.Screen name='HomeProfileScreen' component={HomeProfileScreen} /> */}
            {/* <Stack.Screen name='ProfileProfile' component={ProfileProfile} /> */}
            <Stack.Screen name='LoginProfileScreen' component={LoginProfileScreen} />
            <Stack.Screen name='SigninProfileScreen1' component={SigninProfileScreen1} />
            <Stack.Screen name='SigninProfileScreen2' component={SigninProfileScreen2} />
        </Stack.Navigator>
    );
}
