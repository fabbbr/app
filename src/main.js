import { registerRootComponent } from 'expo'
import * as React from 'react'
import MainNavigation from './components/MainNavigation'
import BottomNavigation from './components/BottomNavigation'

function App() {
    return (
        <>
            <MainNavigation />
            <BottomNavigation />
        </>
    )
}

registerRootComponent(App)