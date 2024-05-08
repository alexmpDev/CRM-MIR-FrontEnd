import { configureStore } from '@reduxjs/toolkit'
import { studentReducer } from './slices/students/studentsSlice';
import { bookReducer } from './slices/books/booksSlice';


const store = configureStore({
    reducer: {
        students: studentReducer,
        books: bookReducer
    },
}) 

export default store;