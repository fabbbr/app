import * as React from 'react'
import { Text, View } from 'react-native'

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text>Home!</Text>
        </View>
    );
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center' 
    }
}
