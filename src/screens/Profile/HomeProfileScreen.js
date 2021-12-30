import * as React from 'react'
import { Text, View } from 'react-native'
import { useSelector } from 'react-redux'

export default function HomeProfileScreen({ navigation }) {
    const { isLoggedIn } = useSelector((state) => state.auth)
    
    if(!isLoggedIn) navigation.navigate('LoginProfileScreen')

    return(
        <View style={styles.container}>
            <Text>Profile</Text>
        </View>
    )
}

const styles = {
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center'
    }
}