import  React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'

import BottomNavigation from '@components/BottomNavigation'
import { asyncSetInitialState } from '@slices/auth'
import * as LS from '@utils/LocalStorage'

export default function App() {
    const dispatch = useDispatch()
    const { init } = useSelector((state) => state.auth)

    useEffect(() => {
        if(init) {
            LS.get('user').then(user => {
                dispatch(asyncSetInitialState({user}))
            })
        }
    }, [])

    return (
        <SafeAreaView style={{flex: 1}}>
            <NavigationContainer>
                <BottomNavigation />
            </NavigationContainer>
        </SafeAreaView>
    )
}