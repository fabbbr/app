import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'

import { setDeliveryAddress } from '@slices/cart'
import ContainerDefault from '@containers/ContainerDefault'
import AppRadioButton from '@components/AppRadioButton'
import AppButton from '@components/AppButton'
import GlobalStyle from '@styles/GlobalStyle'

export default function AddressCartScreen() {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const { t } = useTranslation()

    const cart = useSelector((state) => state.cart)
    const [addressId, setAddressId] = useState(null)
    useEffect(() => {
        setAddressId(cart.delivery_address ? cart.delivery_address.id : null)
    }, [])

    const addresses = [
        {
            id: 1,
            name: 'Domicile',
            street: '17 avenue de la belle-fleur',
            zipcode: '33130',
            city: 'Bègles',
        },
        {
            id: 2,
            name: 'Hugo',
            street: '26 rue Paul Bert',
            zipcode: '33000',
            city: 'Bordeaux',
        },
        {
            id: 3,
            name: 'Clément',
            street: '126 rue des Orangers',
            zipcode: '33110',
            city: 'Caudéran',
        },
    ]

    const selectDeliveryAddress = () => {
        if (!addressId) {
        } else {
            const address = addresses.find(
                (element) => element.id === addressId
            )
            dispatch(setDeliveryAddress({ address }))
            navigation.navigate('HomeCartScreen')
        }
    }

    const dataForRadioButton = addresses.map((address) => ({
        value: address.id,
        label: address.name,
        details: `${address.street}, ${address.zipcode} ${address.city}`,
    }))

    return (
        <ContainerDefault title={t('address')}>
            <View style={styles.container}>
                <AppRadioButton
                    data={dataForRadioButton}
                    onSelect={setAddressId}
                    currentValue={addressId}
                />
            </View>
            <AppButton
                text={t('validate_address')}
                onPress={selectDeliveryAddress}
            />
        </ContainerDefault>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: GlobalStyle.color.light,
        padding: 10,
        borderRadius: 8,
        marginBottom: 10,
    },
})
