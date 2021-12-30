import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'

import BottomNavigation from '@components/BottomNavigation'

export default function App() {

    const dispatch = useDispatch()

    return (
        <SafeAreaView style={{flex: 1}}>
            <NavigationContainer>
                <BottomNavigation />
            </NavigationContainer>
        </SafeAreaView>
    )
}