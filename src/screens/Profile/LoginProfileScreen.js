import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ScrollView, View, Pressable, Text } from 'react-native'
import { useForm } from 'react-hook-form'
import { Link } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'
import { useFocusEffect } from '@react-navigation/native'

import AppInput from '@components/AppInput'
import TextLine from '@components/TextLine'
import * as Tools from '@utils/Tools'
import { login } from '@slices/auth'
import { clearMessage } from '@slices/message'
import GlobalStyle from '@styles/GlobalStyle'
import ButtonStyle from '@styles/ButtonStyle'
import ProfileStyle from '@styles/ProfileStyle'


export default function LoginProfileScreen({ navigation }) {
    const [loading, setLoading] = useState(false) // todo display loading
    const [errors, setErrors] = useState({})
    const { control, handleSubmit } = useForm()
    const { t } = useTranslation()

    const { isLoggedIn } = useSelector((state) => state.auth)
    const { message } = useSelector((state) => state.message) // todo display message

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(clearMessage())
    }, [dispatch])


    const onSubmit = data => {
        let err = {}
        data = Tools.objFormat(data)

        if (!data.username.length) err.username = t('errors:form.input.empty')
        if (!data.password.length) err.password = t('errors:form.input.empty')

        setErrors(err)
        if (Tools.objSize(err) === 0) {
            setLoading(true)

            dispatch(login({
                username: data.username,
                password: data.password
            }))
                .unwrap()
                .then(() => {
                    navigation.navigate('HomeProfileScreen')
                })
                .catch(() => {
                    setLoading(false)
                })
        }
    }

    useFocusEffect(() => {
        if(isLoggedIn) navigation.navigate('HomeProfileScreen')
    })

    return (
        <ScrollView contentContainerStyle={ProfileStyle.container}>
            <Text style={ProfileStyle.title}>{t('login')}</Text>
            <AppInput control={control} name="username" type="text" label={t('email')} error={errors.username} />
            <AppInput control={control} name="password" type="password" label={t('password')} error={errors.password} />

            <View style={{ marginTop: 10 }}>
                <Pressable style={ButtonStyle.default} onPress={handleSubmit(onSubmit)}>
                    <Text style={ButtonStyle.default_text}>{t('login')}</Text>
                </Pressable>
            </View>

            <View style={{ marginVertical: 15 }}>
                <TextLine text='connexion avec' color={GlobalStyle.color.darklight} lineColor={GlobalStyle.color.darklight} />
            </View>

            <View style={{ marginTop: 10 }}>
                <Pressable style={ButtonStyle.google}>
                    <Text style={ButtonStyle.google_text}>{t('login_google')}</Text>
                </Pressable>
            </View>

            <View style={{ marginTop: 40, alignItems: 'center' }}>
                <Text style={{ color: GlobalStyle.color.darklight, marginBottom: 5 }}>{t('no_account')}</Text>
                <Link style={ProfileStyle.link} to={{ screen: 'SigninProfileScreen1' }}>
                    {t('signin2')}
                </Link>
            </View>
        </ScrollView>
    )
}