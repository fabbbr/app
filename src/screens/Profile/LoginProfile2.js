import React from 'react'
import { Text, TextInput, View } from 'react-native'
import AppButton from '../../components/AppButton'
import * as Verifier from '../../utils/Verifier'
import * as Api from '../../utils/Api'
import AppInput from '../../components/AppInput'



export default function LoginProfile() {
    const { values, errors, handleChange, handleSubmit } = useForm(login, loginFormVerifier)

    return(
        <View style={styles.container}>
            <TextInput name="email" onChange={handleChange} value={values.email || ''} required />
            {/* <AppInput
                value={values.email}
                onChange={handleChange}
                label="Email :"
                type="email"
                placeholder="john.doe@mail.com"
                required
            /> */}
            {/* <View style={styles.box}>
                <Text style={styles.label}>Mot de passe : </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setPassword}
                    placeholder='*****'
                    secureTextEntry={true}
                />
            </View> */}
            <View style={styles.connection}>
                <AppButton 
                    title='Connexion'
                    onPress={handleSubmit}
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