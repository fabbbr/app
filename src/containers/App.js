import  React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'

import BottomNavigation from '@components/BottomNavigation'
import { setUserInit } from '@slices/auth'

export default function App() {
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()
    const { init } = useSelector((state) => state.auth)

    useEffect(() => {
        if(init) {
            dispatch(setUserInit())
                .unwrap()
                .then(() => {
                    setLoading(false)
                })
        }
    }, [])

    return (
        <SafeAreaView style={{flex: 1}}>
            {loading ?
                (<Text>Loading</Text>)
                :
                (<NavigationContainer>
                    <BottomNavigation />
                </NavigationContainer>)
            }
        </SafeAreaView>
    )
}