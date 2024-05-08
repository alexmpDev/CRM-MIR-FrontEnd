import React, { useEffect } from "react";
import {
    Input,
    Button,
    Typography,
    select,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from 'react-redux';
import { edit, listOne} from "@/slices/books/thunks";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useState } from "react";
export function BooksEdit() {

    const { book } = useSelector(state => state.books)
    const navigate = useNavigate();
    const { id } = useParams();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listOne(id));
    }, []);

    const onSubmit = async (data) => {
        console.log(data);
        data.title ? "" : data.title = book.title
        data.author ? "" : data.author = book.author
        data.isbn ? "" : data.isbn = book.isbn
        data.gender ? "" : data.gender = book.gender
        await dispatch(edit(data, id));
        navigate("/dashboard/books");
    };

    return (
        <div className="mt-12 mb-8 flex justify-center">
            <div className="w-full lg:w-3/5">
                <div className="text-center">
                    <Typography variant="h2" className="font-bold mb-4">Edit {book.title}, id: {id}</Typography>
                    <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">Just change the fields you want to Update</Typography>
                </div>
                <form className="mt-8 mx-auto w-80 max-w-screen-lg lg:w-1/2" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-6">
                        <Typography variant="small" color="blue-gray" className="font-medium">Title</Typography>
                        <Input
                            {...register('title')}
                            defaultValue={book.title}
                            type="text"
                            size="lg"
                            className="border-t-blue-gray-200 focus:border-t-gray-900"
                        />
                    </div>
                    <div className="mb-6">
                        <Typography variant="small" color="blue-gray" className="font-medium">Author</Typography>
                        <Input
                            {...register('author')}
                            type="text"
                            defaultValue={book.author}
                            size="lg"
                            className="border-t-blue-gray-200 focus:border-t-gray-900"
                        />
                    </div>
                    <div className="mb-6">
                        <Typography variant="small" color="blue-gray" className="font-medium">ISBN</Typography>
                        <Input
                            {...register('isbn')}
                            type="text"
                            defaultValue={book.isbn}
                            size="lg"
                            className="border-t-blue-gray-200 focus:border-t-gray-900"
                        />
                    </div>
                    <div className="mb-6">
                        <Typography variant="small" color="blue-gray" className="font-medium">Gender</Typography>
                        <Input
                            {...register('gender')}
                            type="text"
                            defaultValue={book.gender}
                            size="lg"
                            className="border-t-blue-gray-200 focus:border-t-gray-900"
                        />
                    </div>
                    <Button type="submit" className="mt-6" fullWidth>Edit</Button>
                </form>
                <div className="mt-6 flex justify-center w-full">
                    <Link to="/dashboard/books"><Button>Return</Button></Link>
                </div>
            </div>
        </div>
    );
}

export default BooksEdit;
