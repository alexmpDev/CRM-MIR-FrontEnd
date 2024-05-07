import React, { useEffect } from "react";
import {
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from 'react-redux';
import { create } from "@/slices/students/thunks"; // Assuming you have a create thunk
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from 'react-hook-form';

export function StudentsCreate() {
    const { student } = useSelector(state => state.students);
    const navigate = useNavigate();
    const { id } = useParams();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const dispatch = useDispatch();


    const onSubmit = async (data) => {
        await dispatch(create(data));
        navigate("/dashboard/students");
    };

    return (
        <div className="mt-12 mb-8 flex justify-center">
            <div className="w-full lg:w-3/5">
                <div className="text-center">
                    <Typography variant="h2" className="font-bold mb-4">Create Student</Typography>
                    <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">Fill the fields to create a new student</Typography>
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
                        <Typography variant="small" color="blue-gray" className="font-medium">Surname1</Typography>
                        <Input
                            {...register('surname1', { required: true })}
                            type="text"
                            size="lg"
                            className="border-t-blue-gray-200 focus:border-t-gray-900"
                        />
                        {errors.surname1 && <span className="text-red-500">Surname1 is required</span>}
                    </div>
                    <div className="mb-6">
                        <Typography variant="small" color="blue-gray" className="font-medium">Surname2</Typography>
                        <Input
                            {...register('surname2', { required: true })}
                            type="text"
                            size="lg"
                            className="border-t-blue-gray-200 focus:border-t-gray-900"
                        />
                        {errors.surname2 && <span className="text-red-500">Surname2 is required</span>}
                    </div>
                    <div className="mb-6">
                        <Typography variant="small" color="blue-gray" className="font-medium">Curs</Typography>
                        <Input
                            {...register('curs', { required: true })}
                            type="text"
                            size="lg"
                            className="border-t-blue-gray-200 focus:border-t-gray-900"
                        />
                        {errors.curs && <span className="text-red-500">Curs is required</span>}
                    </div>
                    <div className="mb-6">
                        <Typography variant="small" color="blue-gray" className="font-medium">DNI</Typography>
                        <Input
                            {...register('dni', { required: true })}
                            type="text"
                            size="lg"
                            className="border-t-blue-gray-200 focus:border-t-gray-900"
                        />
                        {errors.dni && <span className="text-red-500">DNI is required</span>}
                    </div>
                    <div className="mb-6">
                        <Typography variant="small" color="blue-gray" className="font-medium">BirthDate</Typography>
                        <Input
                            {...register('birthDate', { required: true })}
                            type="date"
                            size="lg"
                            className="border-t-blue-gray-200 focus:border-t-gray-900"
                        />
                        {errors.birthDate && <span className="text-red-500">BirthDate is required</span>}
                    </div>
                    <div className="mb-6">
                        <Typography variant="small" color="blue-gray" className="font-medium">Photo</Typography>
                        <Input
                            {...register('photo')}
                            size="lg"
                            type="file"
                            className="border-t-blue-gray-200 focus:border-t-gray-900"
                        />
                    </div>
                    <div className="mb-6 flex items-center">
                        <input
                            {...register('leave')}
                            type="checkbox"
                            id="leave"
                            className="rounded border-gray-300 text-blue-500 focus:border-t-gray-900 focus:ring-t-gray-900"
                        />
                        <label htmlFor="leave" className="ml-2 text-sm text-blue-gray-700">Can leave in yard</label>
                    </div>

                    <Button type="submit" className="mt-6" fullWidth>Create</Button>
                </form>
                <div className="mt-6 flex justify-center w-full">
                    <Link to="/dashboard/students"><Button>Return</Button></Link>
                </div>
            </div>
        </div>
    );
}

export default StudentsCreate;
