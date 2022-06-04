import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'
import Toast from 'react-native-toast-message'

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
        <>
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
            <Toast />
        </>
    )
}
