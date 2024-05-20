import React, { useEffect, useState } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button
} from "@material-tailwind/react";
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { listAll, del, edit, filter } from "@/slices/reservations/thunks";

export function Reservations() {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            await dispatch(listAll());
            setLoading(false);
        };
        fetchData();
    }, [dispatch]);

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const handleFilter = async (data) => {
        await dispatch(filter(data.book_id, data.student_id));
    };

    const handleDelete = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const deleteId = formData.get('id');
        const ok = confirm("Want to delete this reservation");
        if (ok) {
            await dispatch(del(deleteId));
            await dispatch(listAll());
        }
    };

    const handleReturn = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const returnId = formData.get('id');
        const ok = confirm("This book have been returned?");
        if (ok) {
            await dispatch(edit(returnId));
            await dispatch(listAll());
        }
    };

    const { role } = useSelector(state => state.auth);
    const { reservations } = useSelector(state => state.reservations);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div>Loading...</div>
            </div>
        );
    }

    return (
        <div className="mt-12 mb-8 flex flex-col gap-12">
            <Card>
                <CardHeader variant="gradient" color="gray" className="mb-8 p-6 flex justify-between items-center">
                    <Typography variant="h6" color="white">
                        Reservations Table
                    </Typography>
                    <div>
                        <form onSubmit={handleSubmit(handleFilter)} className="flex gap-4">
                            <input type="text" placeholder="book_id" className="border border-black p-1 flex-1 text-black" {...register("book_id", { required: false })} />
                            <input type="text" placeholder="student_id" className="border border-black p-1 flex-1 text-black" {...register("student_id", { required: false })} />
                            <button type="submit" className="p-1 bg-gray-900 hover:bg-gray-800">FILTER</button>
                        </form>
                    </div>
                    <Link to="/reservations">
                        <Button>+</Button>
                    </Link>
                </CardHeader>
                <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
                    <table className="w-full min-w-[640px] table-auto">
                        <thead>
                            <tr>
                                {["Book Id", "Student Id", "Return Date", "Returned"].map((el) => (
                                    <th
                                        key={el}
                                        className="border-b border-blue-gray-50 py-3 px-5 text-left"
                                    >
                                        <Typography
                                            variant="small"
                                            className="text-[11px] font-bold uppercase text-blue-gray-400"
                                        >
                                            {el}
                                        </Typography>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {reservations.map(
                                ({ id, book_id, student_id, return_date, returned, student, book }, key) => {
                                    const className = `py-3 px-5 ${key === reservations.length - 1
                                        ? ""
                                        : "border-b border-blue-gray-50"
                                        }`;

                                    return (
                                        <tr key={id}>
                                            <Link to={"/reservations/show/" + id}>
                                                <td className={className}>
                                                    <Typography className="text-xs font-semibold text-blue-gray-600">
                                                        {book.title}
                                                    </Typography>
                                                </td>
                                            </Link>
                                            <td className={className}>
                                                <Typography className="text-xs font-semibold text-blue-gray-600">
                                                    {student.name}
                                                </Typography>
                                            </td>
                                            <td className={className}>
                                                <Typography className="text-xs font-semibold text-blue-gray-600">
                                                    {return_date}
                                                </Typography>
                                            </td>
                                            <td className={className}>
                                                <Typography className="text-xs font-semibold text-blue-gray-600">
                                                    {returned == 'true' || returned == 1 ? <span role="img" aria-label="Tick">✔️</span> : <span role="img" aria-label="Cross">❌</span>}
                                                </Typography>
                                            </td>
                                            <td className={className}>
                                                <Typography
                                                    as="a"
                                                    className="text-xs font-semibold text-blue-gray-600"
                                                >
                                                    <form onSubmit={handleReturn}>
                                                        <button type="submit">
                                                            <input type="hidden" name="id" value={id} />
                                                            Returned
                                                        </button>
                                                    </form>
                                                </Typography>
                                            </td>
                                            {role == 1 && (
                                                <td className={className}>
                                                    <Typography
                                                        as="a"
                                                        className="text-xs font-semibold text-blue-gray-600"
                                                    >
                                                        <form onSubmit={handleDelete}>
                                                            <button type="submit">
                                                                <input type="hidden" name="id" value={id} />
                                                                Delete
                                                            </button>
                                                        </form>
                                                    </Typography>
                                                </td>
                                            )}
                                        </tr>
                                    );
                                }
                            )}
                        </tbody>
                    </table>
                </CardBody>
            </Card>
        </div>
    );
}

export default Reservations;
