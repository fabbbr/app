import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    message: '',
    messageType: false,
    messageTime: 0,
}
/*
    messageType:
        1: success
        2: error
        3: warning
        4: info
*/

const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        setMessage: (state, action) => {
            state.message = action.payload.message
            state.messageType = action.payload.messageType
            state.messageTime = new Date().getTime()

            return state
        },
        clearMessage: (state, action) => {
            state.message = ''
            state.messageType = false

            return state
        },
    },
})

export const { setMessage, clearMessage } = messageSlice.actions
export default messageSlice.reducer
