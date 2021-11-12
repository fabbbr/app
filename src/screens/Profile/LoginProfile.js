import React, {useState} from 'react'
import { Text, TextInput, View } from 'react-native'
import AppButton from '../../components/AppButton'
import * as Verifier from '../../utils/Verifier'
import * as Api from '../../utils/Api'

export default function LoginProfile() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function connection() {
        if(!Verifier.email(email)) {
            alert('Email non valide')
        } else {
            // todo verify password
            Api.post('auth/login', {
                email,
                password
            }).then(data => {
                alert(data)
            })
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.label}>Email : </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setEmail}
                    placeholder='example@mail.com'
                />
            </View>
            <View style={styles.box}>
                <Text style={styles.label}>Mot de passe : </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setPassword}
                    placeholder='*****'
                    secureTextEntry={true}
                />
            </View>
            <View style={styles.connection}>
                <AppButton 
                    title='Connexion'
                    onPress={connection}
                />
            </View>
        </View>
    )
}

const styles = {
    container: {
        flex: 1,
        padding: 32,
        justifyContent: 'center'
    },
    box: {
        marginVertical: 12
    },
    label: {
        marginBottom: 5
    },
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    },
    connection: {
        marginTop: 40
    }
}