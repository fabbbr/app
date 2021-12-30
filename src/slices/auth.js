import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import * as LS from '@utils/LocalStorage'
import AuthService from '@services/auth'

export const register = createAsyncThunk(
    "auth/register",
    async ({ username, email, password }, thunkAPI) => {
        try {
            const data = await AuthService.register(username, email, password)
            return { user: data }
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
            thunkAPI.dispatch(setMessage(message))
            return thunkAPI.rejectWithValue()
        }
    }
);

export const login = createAsyncThunk(
    "auth/login",
    async ({ username, password }, thunkAPI) => {
        try {
            const data = await AuthService.login(username, password)
            return { user: data }
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
            thunkAPI.dispatch(setMessage(message))
            return thunkAPI.rejectWithValue()
        }
    }
)

export const logout = createAsyncThunk(
    "auth/logout",
    async () => {
        await AuthService.logout()
    }
)

// const initialState = async () => {
//     try {
//         let user = await LS.get('user')
//         return user ? { isLoggedIn: true, user } : { isLoggedIn: false, user: null }
//     } catch {
//         return { isLoggedIn: false, user: null }
//     }
// }
const initialState = { isLoggedIn: false, user: null }


const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        asyncSetInitialUser: (state, action) => {
            state.isLoggedIn = true,
            state.user = action.payload.user
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

export const { asyncSetInitialUser } = authSlice.actions
export default authSlice.reducer