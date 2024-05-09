import React, { useEffect } from "react";
import {
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { create } from "@/slices/phones/thunks";
export function PhoneCreate( ) {
    
    const navigate = useNavigate();
    const {id} = useParams();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const dispatch = useDispatch();

    const onSubmit = async (data) => {
        await dispatch(create(data, id));
        navigate("/students/phone/" + id);
    };

    return (
        <div className="mt-12 mb-8 flex justify-center">
            <div className="w-full lg:w-3/5">
                <div className="text-center">
                    <Typography variant="h2" className="font-bold mb-4">Create Phone for student: {id}</Typography>
                    <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">Fill the fields to create a new phone</Typography>
                </div>
                <form className="mt-8 mx-auto w-80 max-w-screen-lg lg:w-1/2" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-6">
                        <Typography variant="small" color="blue-gray" className="font-medium">Name</Typography>
                        <Input
                            {...register('name')}
                            type="text"
                            size="lg"
                            className="border-t-blue-gray-200 focus:border-t-gray-900"
                        />
                    </div>
                    <div className="mb-6">
                        <Typography variant="small" color="blue-gray" className="font-medium">Phone</Typography>
                        <Input
                            {...register('phone')}
                            type="text"
                            size="lg"
                            className="border-t-blue-gray-200 focus:border-t-gray-900"
                        />
                    </div>
                    <Button type="submit" className="mt-6" fullWidth>Create</Button>
                </form>
                <div className="mt-6 flex justify-center w-full">
                    <Link to={"/students/phone/" + id}><Button>Return</Button></Link>
                </div>
            </div>
        </div>
    );
}

export default PhoneCreate
;
