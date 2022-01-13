import { setMessage } from '@slices/message'

const error = (thunkAPI, error) => {
    const error = error.message || error.toString()
    thunkAPI.dispatch(setMessage(error))
    return thunkAPI.rejectWithValue()
}

export default {
    error
}