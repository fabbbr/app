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

export default function SigninProfileScreen({ route }) {
    const [loading, setLoading] = useState(false) // todo display loading
    const [errors, setErrors] = useState({})
    const { control, handleSubmit } = useForm()
    const { t } = useTranslation()
    const { email } = route.params

    const { isLoggedIn } = useSelector((state) => state.auth)
    const { message } = useSelector((state) => state.message) // todo display message
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(clearMessage())
    }, [dispatch])

    const onSubmit = data => {
        let err = {}
        data = Tools.objFormat(data)

        data.email = data.email.trim()
        if (!data.email.length) err.email = t('errors:form.input.empty')
        else if (!Verifier.email(data.email)) t('errors:form.input.email')
        if (!data.username) err.username = t('errors:form.input.empty')
        if (!data.password.length) err.password = t('errors:form.input.empty')
        if (!data.password2.length) err.password2 = t('errors:form.input.empty')
        else if (data.password !== data.password2) err.password2 = t('errors:form.input.password')
        data.country = 'FR'

        setErrors(err)
        if (Tools.objSize(err) === 0) {
            setLoading(true)

            dispatch(register({
                username: data.username,
                email : data.email,
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
            <AppTitle text={t('signin')} align="center" icon="3lines" />

            <AppInput control={control} name="email" type="text" label={t('email')} required error={errors.email} defaultValue={email} />
            <AppInput control={control} name="username" type="text" label={t('username')} required error={errors.username} />
            <AppInput control={control} name="password" type="password" label={t('password')} required error={errors.password} />
            <AppInput control={control} name="password2" type="password" label={t('password_confirmation')} required error={errors.password2} />

            <View style={{ marginTop: 10 }}>
                <AppButton text={t('login')} onPress={handleSubmit(onSubmit)} />
            </View>
        </ScrollView>
    )
}