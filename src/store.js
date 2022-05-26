import { configureStore } from '@reduxjs/toolkit'
import authReducer from '@slices/auth'
import messageReducer from '@slices/message'
import cartReducer from '@slices/cart'

const store = configureStore({
    reducer: {
        auth: authReducer,
        message: messageReducer,
        cart: cartReducer,
    },
})

export default store
