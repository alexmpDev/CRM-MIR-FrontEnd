import React, { useEffect } from "react";
import {
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { create, edit, listOne } from "@/slices/phones/thunks";
export function PhoneEdit() {
    
    const navigate = useNavigate();
    const {id} = useParams();
    useEffect(() => {
        dispatch(listOne(id));
    }, [])

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const dispatch = useDispatch();

    const {selectedPhone} = useSelector(state => state.phones)
    console.log(selectedPhone)
    const onSubmit = async (data) => {
        console.log(data);
        data.name ? "" : data.name = selectedPhone.name
        data.phone ? "" : data.phone = selectedPhone.phone
        await dispatch(edit(data, id));
        navigate("/students/phone/" + selectedPhone.student_id);
    };

    return (
        <div className="mt-12 mb-8 flex justify-center">
            <div className="w-full lg:w-3/5">
                <div className="text-center">
                    <Typography variant="h2" className="font-bold mb-4">Edit Phone for student: {selectedPhone.student_id} </Typography>
                    <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">Just change the fields you want to Update</Typography>
                </div>
                <form className="mt-8 mx-auto w-80 max-w-screen-lg lg:w-1/2" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-6">
                        <Typography variant="small" color="blue-gray" className="font-medium">Name</Typography>
                        <Input
                            {...register('name')}
                            type="text"
                            defaultValue={selectedPhone.name}
                            size="lg"
                            className="border-t-blue-gray-200 focus:border-t-gray-900"
                        />
                    </div>
                    <div className="mb-6">
                        <Typography variant="small" color="blue-gray" className="font-medium">Phone</Typography>
                        <Input
                            {...register('phone')}
                            type="text"
                            defaultValue={selectedPhone.phone}
                            size="lg"
                            className="border-t-blue-gray-200 focus:border-t-gray-900"
                        />
                    </div>
                    <Button type="submit" className="mt-6" fullWidth>Edit</Button>
                </form>
                <div className="mt-6 flex justify-center w-full">
                    <Link to={"/students/phone/" + selectedPhone.student_id}><Button>Return</Button></Link>
                </div>
            </div>
        </div>
    );
}

export default PhoneEdit
;
