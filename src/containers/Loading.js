import React from 'react'
import Loader from '@components/Loader'

export default function Loading({ children, data }) {
    if (data) {
        return <>{children}</>
    } else {
        return <Loader width={200} height={200} />
    }
}
