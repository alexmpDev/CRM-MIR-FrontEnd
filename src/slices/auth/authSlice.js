import { createSlice} from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        name: "",
        authToken: "",
        dashboard: []
    },
    reducers: {
        setName: (state, action) => {
            state.name = action.payload
        },
        setAuthToken: (state, action) => {
            state.authToken = action.payload
        },
        setDashboard: (state, action) => {
            state.dashboard = action.payload
        },
    },
})



export const { setName, setAuthToken, setDashboard} = authSlice.actions
export const authReducer = authSlice.reducer