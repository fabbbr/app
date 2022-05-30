import React from 'react'
import StoreNavigation from '@navigations/StoreNavigation'

export default function StoreScreen({ route }) {
    const { id } = route.params
    return <StoreNavigation id={id} />
}
