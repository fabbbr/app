import { registerRootComponent } from 'expo'
import * as React from 'react'
import BottomNavigation from './components/BottomNavigation'
import { NavigationContainer } from '@react-navigation/native'

function App() {
    return (
        <NavigationContainer>
            <BottomNavigation />
        </NavigationContainer>
    )
}

registerRootComponent(App)