import React, { useState } from 'react'
import { ScrollView, View, Pressable, Text } from "react-native"
import { useForm } from "react-hook-form"
import { Link } from "@react-navigation/native"
import { useTranslation } from 'react-i18next'
import { useSelector } from "react-redux"

import AppInput from "@components/AppInput"
import TextLine from "@components/TextLine"
import * as Tools from '@utils/Tools'
import * as Verifier from '@utils/Verifier'
import GlobalStyle from "@styles/GlobalStyle"
import ButtonStyle from "@styles/ButtonStyle"
import ProfileStyle from "@styles/ProfileStyle"


export default function SigninProfileScreen1({ navigation }) {
    const [ errors, setErrors ] = useState({})
    const { control, handleSubmit } = useForm()
    const { t } = useTranslation()

    const { isLoggedIn } = useSelector((state) => state.auth)

    const onSubmit = data => {
        let err = {}
        data = Tools.objFormat(data)

        data.email = data.email.trim()
        if(!data.email.length) err.email = t('errors:form.input.empty')
        else if(!Verifier.email(data.email)) err.email = t('errors:form.input.email')

        setErrors(err)
        if(Tools.objSize(err) === 0) {
            navigation.navigate('SigninProfileScreen2', {
                email: data.email
            })
        }
    }

    if (isLoggedIn) navigation.navigate('HomeProfileScreen')

    return (
        <ScrollView contentContainerStyle={ProfileStyle.container}>
            <Text style={ProfileStyle.title}>{t('signin')}</Text>
            <AppInput control={control} name="email" type="text" label={t('email')} error={errors.email} />

            <View style={{marginTop: 10}}>
                <Pressable style={ButtonStyle.default} onPress={handleSubmit(onSubmit)}>
                    <Text style={ButtonStyle.default_text}>{t('signin2')}</Text>
                </Pressable>
            </View>

            <View style={{ marginVertical: 15 }}>
                <TextLine text={t('signin_with')} color={GlobalStyle.color.darklight} lineColor={GlobalStyle.color.darklight} />
            </View>

            <View style={{ marginTop: 10 }}>
                <Pressable style={ButtonStyle.google}>
                    <Text style={ButtonStyle.google_text}>{t('signin_google')}</Text>
                </Pressable>
            </View>

            <View style={{ marginTop: 40, alignItems: 'center' }}>
                <Text style={{ color: GlobalStyle.color.darklight, marginBottom: 5 }}>{t('has_account')}</Text>
                <Link style={ProfileStyle.link} to={{ screen: 'LoginProfileScreen' }}>
                    {t('login2')}
                </Link>
            </View>
        </ScrollView>
    )
}