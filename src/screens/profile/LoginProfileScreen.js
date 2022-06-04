import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ScrollView, View, Text } from 'react-native'
import { useForm } from 'react-hook-form'
import { Link } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'
import { useFocusEffect } from '@react-navigation/native'
import { useToast } from 'react-native-toast-notifications'

import AppInput from '@components/AppInput'
import TextLine from '@components/TextLine'
import AppButton from '@components/AppButton'
import AppTitle from '@components/AppTitle'
import * as Tools from '@utils/Tools'
import { login } from '@slices/auth'
import { clearMessage } from '@slices/message'
import GlobalStyle from '@styles/GlobalStyle'
import ProfileStyle from '@styles/ProfileStyle'

export default function LoginProfileScreen({ navigation }) {
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState({})
    const { control, handleSubmit } = useForm()
    const { t } = useTranslation()
    const toast = useToast()

    const { isLoggedIn } = useSelector((state) => state.auth)
    const { message, messageType, messageTime } = useSelector(
        (state) => state.message
    )

    const dispatch = useDispatch()
    useEffect(() => {
        if (messageType) {
            toast.show(t(message), { type: messageType, duration: 2000 })
            dispatch(clearMessage())
        }
    }, [messageTime])

    const onSubmit = async (data) => {
        let err = {}
        data = Tools.objFormat(data)

        if (!data.username.length) err.username = t('errors:form.input.empty')
        if (!data.password.length) err.password = t('errors:form.input.empty')

        setErrors(err)
        if (Tools.objSize(err) === 0) {
            setLoading(true)

            try {
                const response = await dispatch(
                    login({
                        username: data.username,
                        password: data.password,
                    })
                ).unwrap()

                if (response) navigation.navigate('HomeProfileScreen')
            } catch {
                setLoading(false)
            }
        }
    }

    useFocusEffect(() => {
        if (isLoggedIn) navigation.navigate('HomeProfileScreen')
    })

    return (
        <ScrollView contentContainerStyle={ProfileStyle.container}>
            <AppTitle text={t('login')} align="center" icon="3lines" />

            <AppInput
                control={control}
                name="username"
                type="text"
                label={t('email')}
                error={errors.username}
            />
            <AppInput
                control={control}
                name="password"
                type="password"
                label={t('password')}
                error={errors.password}
            />

            <View style={{ marginTop: 10 }}>
                <AppButton
                    text={t('login')}
                    onPress={handleSubmit(onSubmit)}
                    loading={loading}
                />
            </View>

            <View style={{ marginVertical: 15 }}>
                <TextLine
                    text="connexion avec"
                    color={GlobalStyle.color.gray}
                    lineColor={GlobalStyle.color.gray}
                />
            </View>

            <View style={{ marginTop: 10 }}>
                <AppButton type="google" text={t('login_google')} />
            </View>

            <View style={{ marginTop: 40, alignItems: 'center' }}>
                <Text style={ProfileStyle.bottom_text}>{t('no_account')}</Text>
                <Link
                    style={ProfileStyle.link}
                    to={{ screen: 'SigninProfileScreenStep1' }}
                >
                    {t('signin2')}
                </Link>
            </View>
        </ScrollView>
    )
}
