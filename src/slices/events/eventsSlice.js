import { createSlice } from '@reduxjs/toolkit'

const eventSlice = createSlice({
    name: 'event',
    initialState: {
        events: [],
        event: [],
        courses: []
    },
    reducers: {
        setEvents: (state, action) => {
            state.events = action.payload
        },
        setEvent: (state, action) => {
            state.event = action.payload
        },
        setCourses: (state, action) => {
            state.courses = action.payload
        },
    },
})

export const { setEvents, setEvent, setCourses} = eventSlice.actions
export const eventReducer = eventSlice.reducer