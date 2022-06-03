import { createSlice } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

const initialState = {
    products: {},
    deliveries: {
        1: {
            name: 'Standard',
            price: 9.99,
        },
        2: {
            name: 'Express',
            price: 19.99,
        },
    },
    facturation_address: 0,
    delivery_address: 0,
    delivery_method: 0,
    payment_method: 0,
    error: '',
    success: '',
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const productPayload = action.payload.product
            const quantityPayload = action.payload.quantity
            const fromPagePayload = action.payload.from_page || false

            let quantity = state.products[productPayload.id]
                ? state.products[productPayload.id].quantityInCart +
                  quantityPayload
                : quantityPayload

            if (productPayload.quantity >= quantity) {
                state.products[productPayload.id] = {
                    ...productPayload,
                    quantityInCart: quantity,
                }
                if (fromPagePayload) state.success = 'added_to_cart'
            } else {
                state.error = 'not_enought_quantity'
            }
        },
        removeProduct: (state, action) => {
            const product = action.payload.product

            let quantity = state.products[product.id]
                ? state.products[product.id].quantityInCart -
                  action.payload.quantity
                : 0

            if (quantity <= 0) {
                // delete state.products[product.id]
            } else {
                state.products[product.id] = {
                    ...product,
                    quantityInCart: quantity,
                }
            }
        },
        deleteProduct: (state, action) => {
            const product = action.payload.product
            delete state.products[product.id]
        },
        setFacturationAddress: (state, action) => {},
        setDeliveryAddress: (state, action) => {
            state.delivery_address = action.payload.address
        },
        setDeliveryMethod: (state, action) => {
            state.delivery_method = action.payload.delivery_method
        },
        setPaymentMethod: (state, action) => {},
        clearCart: (state, action) => {
            state = initialState
        },
        clearError: (state, action) => {
            state.error = ''
        },
        clearSuccess: (state, action) => {
            state.success = ''
        },
    },
})

export const {
    addProduct,
    removeProduct,
    deleteProduct,
    setFacturationAddress,
    setDeliveryAddress,
    setDeliveryMethod,
    setPaymentMethod,
    clearCart,
    clearError,
    clearSuccess,
} = cartSlice.actions
export default cartSlice.reducer
