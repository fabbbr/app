import { createSlice } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

const initialState = {
    products: {},
    facturation_address: 0,
    delivery_address: 0,
    delivery_method: 0,
    payment_method: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const productPayload = action.payload.product
            const quantityPayload = action.payload.quantity

            let quantity = state.products[productPayload.id]
                ? state.products[productPayload.id].quantity + quantityPayload
                : quantityPayload

            if (productPayload.quantity_available >= quantity) {
                state.products[productPayload.id] = {
                    ...productPayload,
                    quantity,
                }
            } else {
                console.log('not enough quantity')
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
        setDeliveryAddress: (state, action) => {},
        setPaymentMethod: (state, action) => {},
        clearCart: (state, action) => {
            state = initialState
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
} = cartSlice.actions
export default cartSlice.reducer
