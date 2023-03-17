import React, { useState, useEffect, useCallback } from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'
import Toast from 'react-native-toast-message'
import * as Message from '@utils/Message'

import Loading from '@containers/Loading'
import BottomNavigation from '@navigations/BottomNavigation'
import { setUserInit } from '@slices/auth'
import { getFonts } from '@constants/fonts'

export default function App() {
    const [appIsReady, setAppIsReady] = useState(false)

    const dispatch = useDispatch()
    const { authInit } = useSelector((state) => state.auth)

    useEffect(() => {
        const asyncStart = async () => {
            try {
                if (authInit) await dispatch(setUserInit())
                await getFonts()
            } catch (err) {
                Message.error({ text1: err })
            } finally {
                setAppIsReady(true)
            }
        }
        asyncStart()
    }, [])

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            await SplashScreen.hideAsync()
        }
    }, [appIsReady])

    if (!appIsReady) {
        return null
    }

    return (
        <>
            <Loading data={appIsReady} onLayout={onLayoutRootView}>
                <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always', bottom: 'always' }}>
                    <StatusBar barStyle="light-content" />
                    {appIsReady ? (
                        <NavigationContainer>
                            <BottomNavigation />
                        </NavigationContainer>
                    ) : (
                        false
                    )}
                </SafeAreaView>
            </Loading>
            <Toast />
        </>
    )
}
