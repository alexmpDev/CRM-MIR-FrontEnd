import { createSlice} from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        name: "",
        authToken: "",
        dashboard: [],
        role: 0
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
        setRole: (state, action) => {
            state.role = parseInt(action.payload)
        },
    },
})



export const { setName, setAuthToken, setDashboard, setRole} = authSlice.actions
export const authReducer = authSlice.reducer