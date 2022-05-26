import React, { useState, useEffect } from 'react'
import { ScrollView, View, Text } from 'react-native'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useSelector, useDispatch } from 'react-redux'
import { useFocusEffect } from '@react-navigation/native'

import AppInput from '@components/AppInput'
import AppButton from '@components/AppButton'
import AppTitle from '@components/AppTitle'
import * as Tools from '@utils/Tools'
import * as Verifier from '@utils/Verifier'
import { register } from '@slices/auth'
import { clearMessage } from '@slices/message'
import ProfileStyle from '@styles/ProfileStyle'

export default function SigninProfileScreenStep2({ route, navigation }) {
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState({})
    const { email } = route.params
    const { control, handleSubmit, setValue } = useForm()
    const { t } = useTranslation()

    const { isLoggedIn } = useSelector((state) => state.auth)
    const { message, messageType } = useSelector((state) => state.message) // todo display message
    const dispatch = useDispatch()

    useEffect(() => {
        setValue('email', email)
    }, [])

    useEffect(() => {
        if (message === 'EMAIL_ALREADY_USED')
            setErrors({ ...errors, email: message })
        if (message === 'USERNAME_ALREADY_USED')
            setErrors({ ...errors, username: message })
    }, [message])

    useEffect(() => {
        dispatch(clearMessage())
    }, [dispatch])

    const onSubmit = async (data) => {
        let err = {}
        data = Tools.objFormat(data)

        data.email = data.email.trim()

        if (!data.email.length) err.email = t('errors:form.input.empty')
        else if (!Verifier.email(data.email))
            err.email = t('errors:form.input.email')

        if (!data.username) err.username = t('errors:form.input.empty')

        if (!data.password.length) err.password = t('errors:form.input.empty')
        if (!data.passwordConfirmation.length)
            err.passwordConfirmation = t('errors:form.input.empty')
        else if (data.password !== data.passwordConfirmation)
            err.passwordConfirmation = t('errors:form.input.password')

        data.country = 'FR' // todo add select country

        setErrors(err)
        if (Tools.objSize(err) === 0) {
            setLoading(true)

            try {
                const response = await dispatch(
                    register({
                        username: data.username,
                        email: data.email,
                        password: data.password,
                        country: data.country,
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
            <Text>
                {message} #{messageType}
            </Text>
            <AppTitle text={t('signin')} align="center" icon="3lines" />

            <AppInput
                control={control}
                name="email"
                type="text"
                label={t('email')}
                required
                error={errors.email}
            />
            <AppInput
                control={control}
                name="username"
                type="text"
                label={t('username')}
                required
                error={errors.username}
            />
            <AppInput
                control={control}
                name="password"
                type="password"
                label={t('password')}
                required
                error={errors.password}
            />
            <AppInput
                control={control}
                name="passwordConfirmation"
                type="password"
                label={t('password_confirmation')}
                required
                error={errors.passwordConfirmation}
            />

            {messageType && ['INVALID_PARAMETERS'].includes(message) ? (
                <View style={{ marginVertical: 10 }}>
                    <AppMessage message={message} messageType={messageType} />
                </View>
            ) : null}

            <View style={{ marginTop: 10 }}>
                <AppButton
                    text={t('signin2')}
                    onPress={handleSubmit(onSubmit)}
                    loading={loading}
                />
            </View>
        </ScrollView>
    )
}
