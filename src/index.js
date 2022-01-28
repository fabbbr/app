import { registerRootComponent } from 'expo'
import React from 'react'
import { Provider } from 'react-redux'

import '@constants/IMLocalize'
import store from './store'
import App from '@containers/App'

function index() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

registerRootComponent(index)