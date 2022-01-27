import React from 'react'
import { Text, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { useFocusEffect } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'

import { logout } from '@slices/auth'
import AppButton from '@components/AppButton'

export default function HomeProfileScreen({ navigation }) {
    const { isLoggedIn } = useSelector((state) => state.auth)
    const { t } = useTranslation()
    const dispatch = useDispatch()

    useFocusEffect(() => {
        if (!isLoggedIn) navigation.navigate('LoginProfileScreen')
    })

    const handleLogout = async () => {
        await dispatch(logout())
        navigation.navigate('LoginProfileScreen')
    }

    return (
        <View style={styles.container}>
            {isLoggedIn ? (
                <>
                    <Text>Profile</Text>
                    <AppButton text={t('logout')} onPress={handleLogout} />
                </>
            ) : null}
        </View>
    )
}

const styles = {
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
}
