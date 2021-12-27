import React, { useState } from 'react'
import { ScrollView, View, Pressable, Text } from "react-native"
import { useForm } from "react-hook-form"
import { Link } from "@react-navigation/native"

import GlobalStyle from "@styles/GlobalStyle"
import ButtonStyle from "@styles/ButtonStyle"
import ProfileStyle from "@styles/ProfileStyle"

import AppInput from "@components/AppInput"
import TextLine from "@components/TextLine"

import * as Tools from '@utils/Tools'
import * as Verifier from '@utils/Verifier'

export default function SigninProfileScreen1({ navigation }) {
    const { control, handleSubmit } = useForm()
    const [ errors, setErrors ] = useState({})
    const onSubmit = data => {
        let err = {}
        data = Tools.objFormat(data)

        data.email = data.email.trim()
        if(!data.email.length) err.email = 'Ce champ est obligatoire'
        else if(!Verifier.email(data.email)) err.email = 'Email non valide'

        setErrors(err)
        if(Tools.objSize(err) === 0) {
            navigation.navigate('SigninProfileScreen2', {
                email: data.email
            })
        }
    }

    return (
        <ScrollView contentContainerStyle={ProfileStyle.container}>
            <Text style={ProfileStyle.title}>Inscription</Text>
            <AppInput control={control} name="email" type="text" label="Email" error={errors.email} />

            <View style={{marginTop: 10}}>
                <Pressable style={ButtonStyle.default} onPress={handleSubmit(onSubmit)}>
                    <Text style={ButtonStyle.default_text}>Créer un compte</Text>
                </Pressable>
            </View>

            <View style={{ marginVertical: 15 }}>
                <TextLine text="s'inscrire avec" color={GlobalStyle.color.darklight} lineColor={GlobalStyle.color.darklight} />
            </View>

            <View style={{ marginTop: 10 }}>
                <Pressable style={ButtonStyle.google}>
                    <Text style={ButtonStyle.google_text}>S'inscrire avec Gologolo</Text>
                </Pressable>
            </View>

            <View style={{ marginTop: 40, alignItems: 'center' }}>
                <Text style={{ color: GlobalStyle.color.darklight, marginBottom: 5 }}>Vous avez déjà de compte ?</Text>
                <Link style={ProfileStyle.link} to={{ screen: 'LoginProfileScreen' }}>
                    Se connecter
                </Link>
            </View>
        </ScrollView>
    )
}