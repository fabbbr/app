import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'
import { ToastProvider } from 'react-native-toast-notifications'

import Loading from '@containers/Loading'
import BottomNavigation from '@navigations/BottomNavigation'
import { setUserInit } from '@slices/auth'
import { getFonts } from '@constants/fonts'

export default function App() {
    const [loaded, setLoaded] = useState(false)

    const dispatch = useDispatch()
    const { authInit } = useSelector((state) => state.auth)

    useEffect(() => {
        const asyncStart = async () => {
            const isLoaded =
                (authInit ? await dispatch(setUserInit()) : true) &&
                (await getFonts())
            setLoaded(true)
        }
        asyncStart()
    }, [])

    return (
        <ToastProvider
            offsetTop={50}
            placement="top"
            successColor="#00ca00"
            dangerColor="#cb0000"
        >
            <Loading data={loaded}>
                <SafeAreaView style={{ flex: 1 }}>
                    {loaded ? (
                        <NavigationContainer>
                            <BottomNavigation />
                        </NavigationContainer>
                    ) : (
                        false
                    )}
                </SafeAreaView>
            </Loading>
        </ToastProvider>
    )
}
