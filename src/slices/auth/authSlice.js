import { createSlice} from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        name: "",
        authToken: ""
    },
    reducers: {
        setName: (state, action) => {
            state.name = action.payload
        },
        setAuthToken: (state, action) => {
            state.authToken = action.payload
        },
    },
})



export const { setName, setAuthToken} = authSlice.actions
export const authReducer = authSlice.reducer