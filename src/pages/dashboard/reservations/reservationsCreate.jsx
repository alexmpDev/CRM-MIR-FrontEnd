import React, { useEffect } from "react";
import {
    Input,
    Button,
    Typography,
    select,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from 'react-redux';
import { listAll as listAllBooks } from "@/slices/books/thunks";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useState } from "react";
import { listAll as listAllStudents } from "@/slices/students/thunks";
import { listAll, create } from "@/slices/reservations/thunks";
export function ReservationsCreate() {

    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listAllBooks())
        dispatch(listAllStudents())
        dispatch(listAll())
    }, [])
    const { books } = useSelector(state => state.books)
    const { students } = useSelector(state => state.students)
    const { reservations } = useSelector(state => state.reservations)

    console.log(books)
    console.log(students)
    console.log(reservations)

    const reservedBookIds = reservations.map(reservation => reservation.book_id);
    const availableBooks = books.filter(book => !reservedBookIds.includes(book.id));

    const onSubmit = async (data) => {
        await dispatch(create(data));
        navigate("/dashboard/reservations");
    };

    return (
        <div className="mt-12 mb-8 flex justify-center">
            <div className="w-full lg:w-3/5">
                <div className="text-center">
                    <Typography variant="h2" className="font-bold mb-4">Create Reservation</Typography>
                    <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">Fill the fields to create a new reservation</Typography>
                </div>
                <form className="mt-8 mx-auto w-80 max-w-screen-lg lg:w-1/2" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-6 flex items-center">
                        <select
                            {...register('book_id', { required: true })}
                            className="rounded border-gray-300 text-blue-500 focus:border-t-gray-900 focus:ring-t-gray-900"
                        >
                            {availableBooks.map(book => (
                                <option key={book.id} value={book.id}>{book.title}</option>
                            ))}
                        </select>
                        <label className="ml-2 text-sm text-blue-gray-700">Books</label>
                    </div>
                    <div className="mb-6 flex items-center">
                        <select
                            {...register('student_id', { required: true })}
                            className="rounded border-gray-300 text-blue-500 focus:border-t-gray-900 focus:ring-t-gray-900"
                        >
                            {students.map(student => (
                                <option key={student.id} value={student.id}>{student.name}</option>
                            ))}
                        </select>
                        <label className="ml-2 text-sm text-blue-gray-700">Student</label>
                    </div>
                    <div className="mb-6">
                        <Typography variant="small" color="blue-gray" className="font-medium">Return date</Typography>
                        <Input
                            {...register('return_date', { required: true })}
                            type="date"
                            size="lg"
                            className="border-t-blue-gray-200 focus:border-t-gray-900"
                        />
                    </div>
                    <Button type="submit" className="mt-6" fullWidth>Create</Button>
                </form>
                <div className="mt-6 flex justify-center w-full">
                    <Link to="/dashboard/reservations"><Button>Return</Button></Link>
                </div>
            </div>
        </div>
    );
}

export default ReservationsCreate
    ;
