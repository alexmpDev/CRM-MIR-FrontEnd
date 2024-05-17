import { createSlice } from '@reduxjs/toolkit'

const studentSlice = createSlice({
    name: 'student',
    initialState: {
        students: [],
        student: [],
        courses: []
    },
    reducers: {
        setStudents: (state, action) => {
            state.students = action.payload
        },
        setStudent: (state, action) => {
            state.student = action.payload
        },
        setCourses: (state, action) => {
            state.courses = action.payload
        },
    },
})

export const { setStudents, setStudent, setCourses} = studentSlice.actions
export const studentReducer = studentSlice.reducer