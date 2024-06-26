import React, { useEffect, useState } from "react";
import { Typography, Button } from "@material-tailwind/react";
import { useSelector, useDispatch } from 'react-redux';
import { listOne } from "@/slices/students/thunks";
import { Link, useParams } from "react-router-dom";

export function StudentsShow() {
    const { student } = useSelector(state => state.students);
    const { role } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const { id } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            await dispatch(listOne(id));
            setLoading(false);
        };
        fetchData();
    }, [dispatch, id]);

    const style = () => {
        if (role != 5) {
            return "mt-12 mb-8 flex justify-center";
        }

        if ((new Date().getFullYear() - new Date(student.birthDate).getFullYear()) >= 18 || student.leave === 'true' || student.leave === 1) {
            return "mt-12 mb-8 flex justify-center bg-green-200";
        }

        return "mt-12 mb-8 flex justify-center bg-red-200";
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div>Loading...</div>
            </div>
        );
    }

    return (
        <div className={style()}>
            <div className="w-full lg:w-3/5">
                <div className="text-center">
                    <Typography variant="h2" className="font-bold mb-4">Details for id: {id}</Typography>
                </div>

                <div className="mt-8 mx-auto w-80 max-w-screen-lg lg:w-1/2">
                    <div className="mb-6">
                        <Typography variant="small" color="blue-gray" className="font-medium">Name:</Typography>
                        <Typography variant="paragraph">{student.name}</Typography>
                    </div>
                    <div className="mb-6">
                        <Typography variant="small" color="blue-gray" className="font-medium">Surname1:</Typography>
                        <Typography variant="paragraph">{student.surname1}</Typography>
                    </div>
                    <div className="mb-6">
                        <Typography variant="small" color="blue-gray" className="font-medium">Surname2:</Typography>
                        <Typography variant="paragraph">{student.surname2}</Typography>
                    </div>
                    {role != 5 && (
                        <>
                            <div className="mb-6">
                                <Typography variant="small" color="blue-gray" className="font-medium">Email:</Typography>
                                <Typography variant="paragraph">{student.email}</Typography>
                            </div>
                            <div className="mb-6">
                                <Typography variant="small" color="blue-gray" className="font-medium">Curs:</Typography>
                                <Typography variant="paragraph">{student.course?.curs}</Typography>
                            </div>
                            <div className="mb-6">
                                <Typography variant="small" color="blue-gray" className="font-medium">DNI:</Typography>
                                <Typography variant="paragraph">{student.dni}</Typography>
                            </div>
                            <div className="mb-6">
                                <Typography variant="small" color="blue-gray" className="font-medium">BirthDate:</Typography>
                                <Typography variant="paragraph">{student.birthDate}</Typography>
                            </div>
                            <div className="mb-6">
                                <Typography variant="small" color="blue-gray" className="font-medium">Leave:</Typography>
                                <Typography variant="paragraph">{student.leave ? "Yes" : "No"}</Typography>
                            </div>
                        </>
                    )}
                    {role != 5 && (
                        <div className="mt-6 flex justify-center w-full">
                            <Link to={"/students/phone/" + id}><Button className="mr-2">Contacts</Button></Link>
                            <Link to="/dashboard/students"><Button>Return</Button></Link>
                            <Link to={"/students/observations/" + id}><Button className="ml-2">Observations</Button></Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default StudentsShow;
