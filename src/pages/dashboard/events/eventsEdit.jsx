import React, { useEffect, useState } from "react";
import {
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from 'react-redux';
import { edit, listAllCourses, listOne } from "@/slices/events/thunks";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from 'react-hook-form';

export function EventsEdit() {
    const { event, courses } = useSelector(state => state.events);
    const navigate = useNavigate();
    const { id } = useParams();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            await dispatch(listOne(id));
            await dispatch(listAllCourses());
            setLoading(false);
        };
        fetchData();
    }, [dispatch, id]);

    const onSubmit = async (data) => {
        data.name = data.name || event.name;
        data.description = data.description || event.description;
        data.event_date = data.event_date || event.event_date;
        await dispatch(edit(data, id));
        navigate("/dashboard/events");
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div>Loading...</div>
            </div>
        );
    }

    return (
        <div className="mt-12 mb-8 flex justify-center">
            <div className="w-full lg:w-3/5">
                <div className="text-center">
                    <Typography variant="h2" className="font-bold mb-4">Edit {event.name}, id: {id}</Typography>
                    <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">Just change the fields you want to update</Typography>
                </div>
                <form className="mt-8 mx-auto w-80 max-w-screen-lg lg:w-1/2" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-6">
                        <Typography variant="small" color="blue-gray" className="font-medium">Name</Typography>
                        <Input
                            {...register('name')}
                            defaultValue={event.name}
                            name="name"
                            type="text"
                            size="lg"
                            className="border-t-blue-gray-200 focus:border-t-gray-900"
                        />
                    </div>
                    <div className="mb-6">
                        <Typography variant="small" color="blue-gray" className="font-medium">Description</Typography>
                        <Input
                            {...register('description')}
                            type="text"
                            defaultValue={event.description}
                            size="lg"
                            className="border-t-blue-gray-200 focus:border-t-gray-900"
                        />
                    </div>
                    <div className="mb-6">
                        <Typography variant="small" color="blue-gray" className="font-medium">Event Date</Typography>
                        <Input
                            {...register('event_date')}
                            type="date"
                            defaultValue={event.event_date}
                            size="lg"
                            className="border-t-blue-gray-200 focus:border-t-gray-900"
                        />
                    </div>
                    <Button type="submit" className="mt-6" fullWidth>Edit</Button>
                </form>
                <div className="mt-6 flex justify-center w-full">
                    <Link to="/dashboard/events"><Button>Return</Button></Link>
                </div>
            </div>
        </div>
    );
}

export default EventsEdit;
