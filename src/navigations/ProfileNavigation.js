import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useTranslation } from 'react-i18next'

import DefaultHeader from '@navigations/DefaultHeader'

import HomeProfileScreen from '@screens/profile/HomeProfileScreen'
import LoginProfileScreen from '@screens/profile/LoginProfileScreen'
import SigninProfileScreenStep1 from '@screens/profile/SigninProfileScreenStep1'
import SigninProfileScreenStep2 from '@screens/profile/SigninProfileScreenStep2'

import OrderHistoryProfileScreen from '@screens/profile/OrderHistoryProfileScreen'
import OrderProfileScreen from '@screens/profile/OrderProfileScreen'
import AddressesProfileScreen from '@screens/profile/AddressesProfileScreen'
import AddressProfileScreen from '@screens/profile/AddressProfileScreen'

const Stack = createNativeStackNavigator()

export default function ProfileNavigation() {
    const { t } = useTranslation()

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="HomeProfileScreen"
                component={HomeProfileScreen}
            />
            <Stack.Screen
                name="LoginProfileScreen"
                component={LoginProfileScreen}
            />
            <Stack.Screen
                name="SigninProfileScreenStep1"
                component={SigninProfileScreenStep1}
            />
            <Stack.Screen
                name="SigninProfileScreenStep2"
                component={SigninProfileScreenStep2}
            />
            <Stack.Screen
                name="OrderHistoryProfileScreen"
                component={OrderHistoryProfileScreen}
                options={{ ...config, title: t('order_history') }}
            />
            <Stack.Screen
                name="OrderProfileScreen"
                component={OrderProfileScreen}
                options={{ ...config, title: t('order') }}
            />
            <Stack.Screen
                name="AddressesProfileScreen"
                component={AddressesProfileScreen}
                options={{ ...config, title: t('addresses') }}
            />
            <Stack.Screen
                name="AddressProfileScreen"
                component={AddressProfileScreen}
                options={{ ...config, title: t('address') }}
            />
        </Stack.Navigator>
    )
}

const config = {
    headerShown: true,
    header: ({ navigation, route, options, back }) => {
        return (
            <DefaultHeader
                navigation={navigation}
                route={route}
                options={options}
                back={back}
                share={false}
                line={true}
            />
        )
    },
}
