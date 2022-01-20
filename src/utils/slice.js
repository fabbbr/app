import { setMessage } from '@slices/message'

export const error = (thunkAPI, error) => {
    const error = error.message || error.toString()
    thunkAPI.dispatch(setMessage(error))
    return thunkAPI.rejectWithValue()
}