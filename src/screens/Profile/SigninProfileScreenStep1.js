import React, { useState } from 'react'
import { ScrollView, View, Text } from 'react-native'
import { useForm } from 'react-hook-form'
import { Link } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useFocusEffect } from '@react-navigation/native'

import AppInput from '@components/AppInput'
import TextLine from '@components/TextLine'
import AppButton from '@components/AppButton'
import AppTitle from '@components/AppTitle'
import * as Tools from '@utils/Tools'
import * as Verifier from '@utils/Verifier'
import GlobalStyle from '@styles/GlobalStyle'
import ProfileStyle from '@styles/ProfileStyle'


export default function SigninProfileScreenStep1({ navigation }) {
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
            navigation.navigate('SigninProfileScreenStep2', {
                email: data.email
            })
        }
    }

    useFocusEffect(() => {
        if(isLoggedIn) navigation.navigate('HomeProfileScreen')
    })

    return (
        <ScrollView contentContainerStyle={ProfileStyle.container}>
            <AppTitle text={t('signin')} align="center" icon="3lines" />
            <AppInput control={control} name="email" type="text" label={t('email')} error={errors.email} />

            <View style={{marginTop: 10}}>
                <AppButton text={t('signin2')} onPress={handleSubmit(onSubmit)} />
            </View>

            <View style={{ marginVertical: 15 }}>
                <TextLine text={t('signin_with')} color={GlobalStyle.color.gray} lineColor={GlobalStyle.color.gray} />
            </View>

            <View style={{ marginTop: 10 }}>
                <AppButton type="google" text={t('signin_google')} />
            </View>

            <View style={{ marginTop: 40, alignItems: 'center' }}>
                <Text style={ProfileStyle.bottom_text}>{t('has_account')}</Text>
                <Link style={ProfileStyle.link} to={{ screen: 'LoginProfileScreen' }}>
                    {t('login2')}
                </Link>
            </View>
        </ScrollView>
    )
}