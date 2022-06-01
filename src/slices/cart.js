import { createSlice } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

const initialState = {
    products: {},
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
                ? state.products[productPayload.id].quantity + quantityPayload
                : quantityPayload

            if (productPayload.quantity_available >= quantity) {
                state.products[productPayload.id] = {
                    ...productPayload,
                    quantity,
                }
                if (fromPagePayload) state.success = 'added_to_cart'
            } else {
                state.error = 'not_enought_quantity'
            }
        },
        removeProduct: (state, action) => {
            const product = action.payload.product

            let quantity = state.products[product.id]
                ? state.products[product.id].quantity - action.payload.quantity
                : 0

            if (quantity <= 0) {
                // delete state.products[product.id]
            } else {
                state.products[product.id] = {
                    ...product,
                    quantity,
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
    setPaymentMethod,
    clearCart,
    clearError,
    clearSuccess,
} = cartSlice.actions
export default cartSlice.reducer
