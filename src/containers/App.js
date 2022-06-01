import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'
import Apploading from 'expo-app-loading'
import { ToastProvider } from 'react-native-toast-notifications'

import BottomNavigation from '@navigations/BottomNavigation'
import { setUserInit } from '@slices/auth'
import { getFonts } from '@constants/fonts'

export default function App() {
    const [loaded, setLoaded] = useState(false)

    const dispatch = useDispatch()
    const { authInit } = useSelector((state) => state.auth)

    const asyncStart = async () => {
        return (
            (authInit ? await dispatch(setUserInit()) : true) &&
            (await getFonts())
        )
    }

    return (
        <ToastProvider
            offsetTop={50}
            placement="top"
            successColor="#00ca00"
            dangerColor="#cb0000"
        >
            <SafeAreaView style={{ flex: 1 }}>
                {!loaded ? (
                    <Apploading
                        startAsync={asyncStart}
                        onFinish={() => {
                            setLoaded(true)
                        }}
                        onError={console.warn}
                    />
                ) : (
                    <NavigationContainer>
                        <BottomNavigation />
                    </NavigationContainer>
                )}
            </SafeAreaView>
        </ToastProvider>
    )
}
