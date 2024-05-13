import React, { useEffect } from "react";
import { Typography, Button } from "@material-tailwind/react";
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from "react-router-dom";
import { listOne } from "@/slices/reservations/thunks";

export function ReservationsShow() {
    const { reservation } = useSelector(state => state.reservations);
    const dispatch = useDispatch();
    const { id } = useParams();
    console.log(reservation)

    useEffect(() => {
        dispatch(listOne(id));
    }, []);

    return (
        <div className="mt-12 mb-8 flex justify-center">
            <div className="w-full lg:w-3/5">
                <div className="text-center">
                    <Typography variant="h2" className="font-bold mb-4">Details Reservation id: {id}</Typography>
                </div>
                <div className="mt-8 mx-auto w-80 max-w-screen-lg lg:w-1/2">
                    <div className="mb-6">
                        <Typography variant="small" color="blue-gray" className="font-medium">Book name:</Typography>
                        <Typography variant="paragraph">{reservation.book.title}</Typography>
                    </div>
                    <div className="mb-6">
                        <Typography variant="small" color="blue-gray" className="font-medium">Student name:</Typography>
                        <Typography variant="paragraph">{reservation.student.name}</Typography>
                    </div>
                    <div className="mb-6">
                        <Typography variant="small" color="blue-gray" className="font-medium">Return Date:</Typography>
                        <Typography variant="paragraph">{reservation.return_date}</Typography>
                    </div>
                    <div className="mb-6">
                        <Typography variant="small" color="blue-gray" className="font-medium">Returned?</Typography>
                        <Typography variant="paragraph">{reservation.returned == 'true' || reservation.returned == 1 ? <span role="img" aria-label="Tick">✔️</span> : <span role="img" aria-label="Cross">❌</span>}</Typography>

                    </div>
                    <div className="mt-6 flex justify-center w-full">
                        <Link to="/dashboard/reservations"><Button>Return</Button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReservationsShow;
