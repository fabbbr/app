import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeProfile from './Profile/HomeProfile'
import ProfileProfile from './Profile/ProfileProfile'
import LoginProfile from './Profile/LoginProfile'
import SigninProfile from './Profile/SigninProfile'

const Stack = createNativeStackNavigator()

export default function ProfileScreen() {
    return (
        <Stack.Navigator screenOptions = {{ headerShown: false }}>
            {/* <Stack.Screen name='HomeProfile' component={HomeProfile} /> */}
            {/* <Stack.Screen name='ProfileProfile' component={ProfileProfile} /> */}
            <Stack.Screen name='LoginProfile' component={LoginProfile} />
            <Stack.Screen name='SigninProfile' component={SigninProfile} />
        </Stack.Navigator>
    );
}
