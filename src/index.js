import { registerRootComponent } from 'expo'
import React, { useState, useEffect } from 'react'
import { Provider } from 'react-redux'
import { StripeProvider } from '@stripe/stripe-react-native'

import '@constants/IMLocalize'
import store from './store'
import App from '@containers/App'
import { fetchPublishableKey } from '@services/stripe'

function index() {
    // const { handleURLCallback } = useStripe()
    const [publishableKey, setPublishableKey] = useState('')

    // useEffect(() => {
    //     async function initialize() {
    //         const publishableKey = await fetchPublishableKey()
    //         if (publishableKey) {
    //             setPublishableKey(publishableKey)
    //         }
    //     }
    //     initialize()
    // }, [])

    // const handleDeepLink = useCallback(
    //     async (url) => {
    //         if (url && url.includes('safepay')) {
    //             await handleURLCallback(url)
    //         }
    //     },
    //     [handleURLCallback]
    // )

    // useEffect(() => {
    //     const getUrlAsync = async () => {
    //         const initialUrl = await Linking.getInitialURL()
    //         handleDeepLink(initialUrl)
    //     }

    //     const urlCallback = (event: { url }) => {
    //         handleDeepLink(event.url)
    //     }

    //     getUrlAsync()

    //     Linking.addEventListener('url', urlCallback)

    //     return () => Linking.removeEventListener('url', urlCallback)
    // }, [handleDeepLink])

    return (
        <Provider store={store}>
            <StripeProvider
                publishableKey={publishableKey}
                merchantIdentifier="merchant.com.stripe.react.native"
                // urlScheme={Linking.createURL('') + '/--/'}
                // setUrlSchemeOnAndroid={true}
            >
                <App />
            </StripeProvider>
        </Provider>
    )
}

registerRootComponent(index)
