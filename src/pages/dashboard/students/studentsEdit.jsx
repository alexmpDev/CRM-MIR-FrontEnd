import React, { useEffect } from "react";
import {
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from 'react-redux';
import { edit, listAll, listOne } from "@/slices/students/thunks";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useState } from "react";
export function StudentsEdit() {

    const { student } = useSelector(state => state.students)
    const navigate = useNavigate();
    const { id } = useParams();
    const { register, handleSubmit, formState: { errors }, reset  } = useForm();
    const dispatch = useDispatch();
    useEffect (() => {
        dispatch(listOne(id));
    }, []);



    const onSubmit = async (data) => {
        data.name ? "" : data.name = student.name
        data.surname1 ? "" : data.surname1 = student.surname1
        data.surname2 ? "" : data.surname2 = student.surname2
        data.curs ? "" : data.curs = student.curs
        data.dni ? "" : data.dni = student.dni
        data.birthDate ? "" : data.birthDate = student.birthDate
        console.log(id)
        await dispatch(edit(data, id));
        navigate("/dashboard/students");
    };
    return (
        <div className="mt-12 mb-8 flex justify-center">
            <div className="w-full lg:w-3/5">
                <div className="text-center">
                    <Typography variant="h2" className="font-bold mb-4">Edit {student.name}, id: {id}</Typography>
                    <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">Just change the fields you want to Update</Typography>
                </div>
                <form className="mt-8 mx-auto w-80 max-w-screen-lg lg:w-1/2" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-6">
                        <Typography variant="small" color="blue-gray" className="font-medium">Name</Typography>
                        <Input
                            {...register('name')}
                            defaultValue={student.name}
                            name="name"
                            type="text"
                            size="lg"
                            className="border-t-blue-gray-200 focus:border-t-gray-900"
                        />
                    </div>
                    <div className="mb-6">
                        <Typography variant="small" color="blue-gray" className="font-medium">Surname1</Typography>
                        <Input
                            {...register('surname1')}
                            type="text"
                            defaultValue={student.surname1}
                            size="lg"
                            className="border-t-blue-gray-200 focus:border-t-gray-900"
                        />
                    </div>
                    <div className="mb-6">
                        <Typography variant="small" color="blue-gray" className="font-medium">Surname2</Typography>
                        <Input
                            {...register('surname2')}
                            type="text"
                            defaultValue={student.surname2}
                            size="lg"
                            className="border-t-blue-gray-200 focus:border-t-gray-900"
                        />
                    </div>
                    <div className="mb-6">
                        <Typography variant="small" color="blue-gray" className="font-medium">Curs</Typography>
                        <Input
                            {...register('curs')}
                            type="text"
                            defaultValue={student.curs}
                            size="lg"
                            className="border-t-blue-gray-200 focus:border-t-gray-900"
                        />
                    </div>
                    <div className="mb-6">
                        <Typography variant="small" color="blue-gray" className="font-medium">DNI</Typography>
                        <Input
                            {...register('dni')}
                            type="text"
                            defaultValue={student.dni}
                            size="lg"
                            className="border-t-blue-gray-200 focus:border-t-gray-900"
                        />
                    </div>
                    <div className="mb-6">
                        <Typography variant="small" color="blue-gray" className="font-medium">BirthDate</Typography>
                        <Input
                            {...register('birthDate')}
                            type="date"
                            defaultValue={student.birthDate}
                            size="lg"
                            className="border-t-blue-gray-200 focus:border-t-gray-900"
                        />
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
                    
                    <Button type="submit" className="mt-6" fullWidth>Edit</Button>
                </form>
                <div className="mt-6 flex justify-center w-full">
                    <Link to="/dashboard/students"><Button>Return</Button></Link>
                </div>
            </div>
        </div>
    );
}

export default StudentsEdit;
