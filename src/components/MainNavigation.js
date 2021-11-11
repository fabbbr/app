import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import ProfileLogin from '../screens/Profile/Login'
import ProfileSignin from '../screens/Profile/Signin'

const Stack = createNativeStackNavigator()

export default function MainNavigation() {
    return(
        <NavigationContainer>
            <Stack.Screen name='Signin' component={ProfileSignin} />
            <Stack.Screen name='Login' component={ProfileLogin} />
        </NavigationContainer>
    )
}