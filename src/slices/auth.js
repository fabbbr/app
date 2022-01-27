import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import AuthService from '@services/auth'
import * as ErrorUtils from '@utils/Error'

export const register = createAsyncThunk(
    'auth/register',
    async ({ username, email, password, country }, thunkAPI) => {
        try {
            const data = await AuthService.register(username, email, password, country)
            return { user: data }
        } catch (error) {
            return ErrorUtils.slice(thunkAPI, error)
        }
    }
);

export const login = createAsyncThunk(
    'auth/login',
    async ({ username, password }, thunkAPI) => {
        try {
            const data = await AuthService.login(username, password)
            return { user: data }
        } catch (error) {
            return ErrorUtils.slice(thunkAPI, error)
        }
    }
)

export const logout = createAsyncThunk(
    'auth/logout',
    async () => {
        await AuthService.logout()
    }
)

export const setUserInit = createAsyncThunk(
    'auth/getUser',
    async () => {
        const user = await AuthService.getUser()
        return { user }
    }
)

const initialState = { 
    init: true,
    isLoggedIn: false, 
    user: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [setUserInit.fulfilled]: (state, action) => {
            if(action.payload.user) {
                state.isLoggedIn = true,
                state.user = action.payload.user
            }
            state.init = false
        },
        [register.fulfilled]: (state, action) => {
            state.isLoggedIn = true
            state.user = action.payload.user
        },
        [register.rejected]: (state, action) => {
            state.isLoggedIn = false
        },
        [login.fulfilled]: (state, action) => {
            state.isLoggedIn = true
            state.user = action.payload.user
        },
        [login.rejected]: (state, action) => {
            state.isLoggedIn = false
            state.user = null
        },
        [logout.fulfilled]: (state, action) => {
            state.isLoggedIn = false
            state.user = null
        }
    }
})

export default authSlice.reducer