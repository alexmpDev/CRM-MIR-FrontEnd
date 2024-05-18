import React, { useDebugValue, useEffect } from "react";
import {
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from 'react-redux';
import { create, listAllCourses } from "@/slices/events/thunks"; // Assuming you have a create thunk
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from 'react-hook-form';

export function EventsCreate() {
    const { event } = useSelector(state => state.events);
    const navigate = useNavigate();
    const { id } = useParams();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listAllCourses())
    }, [])

    const { courses } = useSelector(state => state.events)

    const onSubmit = async (data) => {
        await dispatch(create(data));
        navigate("/dashboard/events");
    };

    return (
        <div className="mt-12 mb-8 flex justify-center">
            <div className="w-full lg:w-3/5">
                <div className="text-center">
                    <Typography variant="h2" className="font-bold mb-4">Create Event</Typography>
                    <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">Fill the fields to create a new event</Typography>
                </div>
                <form className="mt-8 mx-auto w-80 max-w-screen-lg lg:w-1/2" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-6">
                        <Typography variant="small" color="blue-gray" className="font-medium">Name</Typography>
                        <Input
                            {...register('name', { required: true })}
                            name="name"
                            type="text"
                            size="lg"
                            className="border-t-blue-gray-200 focus:border-t-gray-900"
                        />
                        {errors.name && <span className="text-red-500">Name is required</span>}
                    </div>
                    <div className="mb-6">
                        <Typography variant="small" color="blue-gray" className="font-medium">Description</Typography>
                        <Input
                            {...register('description', { required: true })}
                            type="text"
                            size="lg"
                            className="border-t-blue-gray-200 focus:border-t-gray-900"
                        />
                        {errors.surname1 && <span className="text-red-500">Description is required</span>}
                    </div>
                    
                    <div className="mb-6">
                        <Typography variant="small" color="blue-gray" className="font-medium">Date</Typography>
                        <Input
                            {...register('event_date', { required: true })}
                            type="date"
                            size="lg"
                            className="border-t-blue-gray-200 focus:border-t-gray-900"
                        />
                        {errors.birthDate && <span className="text-red-500">Date is required</span>}
                    </div>
                    
                    <Button type="submit" className="mt-6" fullWidth>Create</Button>
                </form>
                <div className="mt-6 flex justify-center w-full">
                    <Link to="/dashboard/events"><Button>Return</Button></Link>
                </div>
            </div>
        </div>
    );
}

export default EventsCreate;
