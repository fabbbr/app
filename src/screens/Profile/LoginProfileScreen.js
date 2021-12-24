import React, { useState } from "react"
import { ScrollView, View, Pressable, Text } from "react-native"
import { useForm } from "react-hook-form"
import { Link } from "@react-navigation/native"

import GlobalStyle from "@styles/GlobalStyle"
import ButtonStyle from "@styles/ButtonStyle"
import ProfileStyle from "@styles/ProfileStyle"

import AppInput from "@components/AppInput"
import TextLine from "@components/TextLine"

import * as Api from '@utils/Api'
import * as Tools from '@utils/Tools'

export default function LoginProfileScreen() {
    const { control, handleSubmit } = useForm()
    const [errors, setErrors] = useState({})
    const onSubmit = data => {
        let err = {}
        data = Tools.objFormat(data)

        if (!data.username.length) err.username = 'Ce champ est obligatoire'
        if (!data.password.length) err.password = 'Ce champ est obligatoire'

        setErrors(err)
        if (Tools.objSize(err) === 0) {
            Api.post('login', data)
                .then(data => {
                    alert(JSON.stringify(data))
                })
        }
    }

    return (
        <ScrollView contentContainerStyle={ProfileStyle.container}>
            <Text style={ProfileStyle.title}>Connexion</Text>
            <AppInput control={control} name="username" type="text" label="Email" error={errors.username} />
            <AppInput control={control} name="password" type="password" label="Mot de passe" error={errors.password} />

            <View style={{ marginTop: 10 }}>
                <Pressable style={ButtonStyle.default} onPress={handleSubmit(onSubmit)}>
                    <Text style={ButtonStyle.default_text}>Connexion</Text>
                </Pressable>
            </View>

            <View style={{ marginVertical: 15 }}>
                <TextLine text='connexion avec' color={GlobalStyle.color.darklight} lineColor={GlobalStyle.color.darklight} />
            </View>

            <View style={{ marginTop: 10 }}>
                <Pressable style={ButtonStyle.google}>
                    <Text style={ButtonStyle.google_text}>Connexion avec Gologolo</Text>
                </Pressable>
            </View>

            <View style={{ marginTop: 40, alignItems: 'center' }}>
                <Text style={{ color: GlobalStyle.color.darklight, marginBottom: 5 }}>Vous n'avez pas de compte ?</Text>
                <Link style={ProfileStyle.link} to={{ screen: 'SigninProfileScreen1' }}>
                    Créer un compte
                </Link>
            </View>
        </ScrollView>
    )
}