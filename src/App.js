import { registerRootComponent } from 'expo'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import store from '@store'

import BottomNavigation from '@components/BottomNavigation'

import '@constants/IMLocalize'

function App() {
    return (
        <Provider store={store}>
            <SafeAreaView style={{flex: 1}}>
                <NavigationContainer>
                    <BottomNavigation />
                </NavigationContainer>
            </SafeAreaView>
        </Provider>
    )
}

registerRootComponent(App)