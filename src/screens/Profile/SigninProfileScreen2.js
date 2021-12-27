import React, { useState } from 'react'
import { ScrollView, View, Pressable, Text } from "react-native"
import { useForm } from "react-hook-form"

import ButtonStyle from "@styles/ButtonStyle"
import ProfileStyle from "@styles/ProfileStyle"

import AppInput from "@components/AppInput"

import * as Tools from '@utils/Tools'
import * as Verifier from '@utils/Verifier'

export default function SigninProfileScreen({ route }) {
    const { email } = route.params
    console.log(email)
    const { control, handleSubmit } = useForm()
    const [ errors, setErrors ] = useState({})
    const onSubmit = data => {
        let err = {}
        data = Tools.objFormat(data)
        
        data.email = data.email.trim()
        if(!data.email.length) err.email = 'Ce champ est obligatoire'
        else if(!Verifier.email(data.email)) err.email = 'Email non valide'
        if(!data.username) err.username = 'Ce champ est obligatoire'
        if(!data.name) err.name = 'Ce champ est obligatoire'
        if(!data.password.length) err.password = 'Ce champ est obligatoire'
        if(!data.password2.length) err.password2 = 'Ce champ est obligatoire'
        else if(data.password !== data.password2) err.password2 = 'Les mots de passe ne sont pas identique'
        data.country = 'FR'
        
        setErrors(err)
        if(Tools.objSize(err) === 0) {
            console.log('registered')
            // Api.post('register', data)
        }
    }


    return (
        <ScrollView contentContainerStyle={ProfileStyle.container}>
            <Text style={ProfileStyle.title}>Inscription</Text>

            <AppInput control={control} name="email" type="text" label="Email" placeholder="john.doe@mail.com" required error={errors.email} defaultValue={email} />
            <AppInput control={control} name="username" type="text" label="Nom d'utilisateur" placeholder="john.doe" required error={errors.username} />
            <AppInput control={control} name="password" type="password" label="Mot de passe" placeholder="********" required error={errors.password} />
            <AppInput control={control} name="password2" type="password" label="Confirmation mot de passe" placeholder="********" required error={errors.password2} />
            
            <View style={{ marginTop: 10 }}>
                <Pressable style={ButtonStyle.default} onPress={handleSubmit(onSubmit)}>
                    <Text style={ButtonStyle.default_text}>Connexion</Text>
                </Pressable>
            </View>
        </ScrollView>
    )
}