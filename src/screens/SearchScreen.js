import * as React from 'react'
import { Text, View } from 'react-native'

export default function SearchScreen() {
    return (
        <View style={styles.container}>
            <Text>Search!</Text>
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
