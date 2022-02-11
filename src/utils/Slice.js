import { setMessage } from '@slices/message'

export const error = (thunkAPI, error) => {
    const messsage = error.message || error.toString()
    thunkAPI.dispatch(setMessage(messsage))
    return thunkAPI.rejectWithValue()
}
