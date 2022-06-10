import React from 'react'
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { useFocusEffect } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'

import { logout } from '@slices/auth'
import { API_URL } from '@constants/'
import { ucFirst } from '@utils/Tools'
import Title from '@components/Title'
import GlobalStyle from '@styles/GlobalStyle'
import HistoryIcon from '@icons/history.svg'
import SettingsIcon from '@icons/settings.svg'

export default function HomeProfileScreen({ navigation }) {
    const { isLoggedIn, user } = useSelector((state) => state.auth)
    const { t } = useTranslation()
    const dispatch = useDispatch()

    useFocusEffect(() => {
        if (!isLoggedIn) navigation.navigate('LoginProfileScreen')
    })

    const handleLogout = async () => {
        await dispatch(logout())
        navigation.navigate('LoginProfileScreen')
    }
    const navigateToOrderHistory = () => {
        navigation.navigate('OrderHistoryProfileScreen')
    }
    const navigateToAddresses = () => {
        navigation.navigate('AddressesProfileScreen')
    }
    const navigateToSettings = () => {
        navigation.navigate('SettingsProfileScreen')
    }

    return (
        <ScrollView style={styles.container}>
            {isLoggedIn && user ? (
                <>
                    <View style={styles.top_container}>
                        <Image
                            style={styles.profile_image}
                            source={{
                                uri: API_URL + 'user_images/' + user.image,
                            }}
                        />
                        <Text style={styles.profile_name}>
                            {ucFirst(user.username)}
                        </Text>
                    </View>
                    <View style={styles.bottom_container}>
                        <TouchableOpacity
                            style={styles.row}
                            activeOpacity={0.6}
                            onPress={navigateToOrderHistory}
                        >
                            <Title
                                icon={<HistoryIcon />}
                                title={t('order_history')}
                            />
                        </TouchableOpacity>
                        <View style={styles.line}></View>
                        <TouchableOpacity
                            style={styles.row}
                            activeOpacity={0.6}
                            onPress={navigateToAddresses}
                        >
                            <Title
                                icon={<HistoryIcon />}
                                title={t('addresses')}
                            />
                        </TouchableOpacity>
                        <View style={styles.line}></View>
                        <TouchableOpacity
                            style={styles.row}
                            activeOpacity={0.6}
                            onPress={navigateToSettings}
                        >
                            <Title
                                icon={<SettingsIcon />}
                                title={t('settings')}
                            />
                        </TouchableOpacity>
                        <View style={styles.line}></View>
                        <TouchableOpacity
                            style={styles.row}
                            activeOpacity={0.6}
                            onPress={handleLogout}
                        >
                            <Title
                                icon={<SettingsIcon />}
                                title={t('logout')}
                            />
                        </TouchableOpacity>
                    </View>
                </>
            ) : null}
        </ScrollView>
    )
}

const styles = {
    container: {
        backgroundColor: GlobalStyle.color.light,
        flex: 1,
    },
    top_container: {
        backgroundColor: GlobalStyle.color.background,
        alignItems: 'center',
        padding: GlobalStyle.container.padding,
    },
    profile_image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop: 20,
        backgroundColor: GlobalStyle.color.lightgray,
    },
    profile_name: {
        marginTop: 10,
        color: GlobalStyle.color.primary,
        fontFamily: 'RecoletaBold',
        fontSize: 20,
    },
    row: {
        padding: GlobalStyle.container.padding,
    },
    line: {
        backgroundColor: GlobalStyle.color.lightgray,
        height: 1,
    },
}
