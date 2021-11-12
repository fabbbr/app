import * as React from 'react'
import { Text, View } from 'react-native'
import AppButton from '../../components/AppButton'

export default function HomeProfile({ navigation }) {
    return(
        <View style={styles.container}>
            <View style={{marginBottom: 20}}>
                <AppButton 
                    title="S'inscrire sur Chare"
                    onPress={() => navigation.navigate('SigninProfile')}
                />
            </View>
            <View>
                <AppButton 
                    title="J'ai déjà un compte" 
                    type="outlined"
                    onPress={() => navigation.navigate('LoginProfile')}
                />
            </View>
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