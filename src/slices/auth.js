import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import AuthService from '@services/auth'
import * as Message from '@utils/Message'

export const register = createAsyncThunk(
    'auth/register',
    async ({ username, email, password, country }, thunkAPI) => {
        try {
            const data = await AuthService.register(
                username,
                email,
                password,
                country
            )
            return { user: data }
        } catch (error) {
            return Message.error({ text1: error, thunkAPI, dispatch: true })
        }
    }
)

export const login = createAsyncThunk(
    'auth/login',
    async ({ username, password }, thunkAPI) => {
        try {
            const data = await AuthService.login(username, password)
            return { user: data }
        } catch (error) {
            return Message.error({ text1: error, thunkAPI })
        }
    }
)

export const logout = createAsyncThunk('auth/logout', async () => {
    await AuthService.logout()
})

export const setUserInit = createAsyncThunk('auth/getUser', async () => {
    const user = await AuthService.getUser()
    return { user }
})

const initialState = {
    init: true,
    isLoggedIn: false,
    user: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(setUserInit.fulfilled, (state, action) => {
                if (action.payload.user) {
                    state.isLoggedIn = true
                    state.user = action.payload.user
                }
                state.init = false
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoggedIn = true
                state.user = action.payload.user
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoggedIn = false
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoggedIn = true
                state.user = action.payload.user
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoggedIn = false
                state.user = null
            })
            .addCase(logout.fulfilled, (state, action) => {
                state.isLoggedIn = false
                state.user = null
            })
    }
})

export default authSlice.reducer
