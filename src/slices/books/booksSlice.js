import { createSlice } from '@reduxjs/toolkit'

const bookSlice = createSlice({
    name: 'book',
    initialState: {
        books: [],
        book: []
    },
    reducers: {
        setBooks: (state, action) => {
            state.books = action.payload
        },
        setBook: (state, action) => {
            state.book = action.payload
        },
    },
})

export const { setBooks, setBook} = bookSlice.actions
export const bookReducer = bookSlice.reducer