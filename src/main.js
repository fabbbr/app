import { registerRootComponent } from 'expo'
import * as React from 'react'
import BottomNavigation from './components/BottomNavigation'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet } from 'react-native'
import GlobalStyle from './styles/GlobalStyle'
import IMLocalize from './utils/IMLocalize'

function App() {
    return (
        <SafeAreaView style={{flex: 1}}>
            <NavigationContainer>
                <BottomNavigation />
            </NavigationContainer>
        </SafeAreaView>
    )
}

registerRootComponent(App)

const styles = StyleSheet.create({
    area: {
        flex: 1,
        backgroundColor: GlobalStyle.color.background
    }
})