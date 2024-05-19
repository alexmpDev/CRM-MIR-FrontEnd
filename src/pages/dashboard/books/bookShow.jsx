import React, { useEffect } from "react";
import { Typography, Button } from "@material-tailwind/react";
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from "react-router-dom";
import { listOne } from "@/slices/books/thunks";

export function BookShow() {
    const { book } = useSelector(state => state.books);
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(listOne(id));
    }, []);
    

    return (
        <div className="mt-12 mb-8 flex justify-center">
            <div className="w-full lg:w-3/5">
                <div className="text-center">
                    <Typography variant="h2" className="font-bold mb-4">Details for id: {id}</Typography>
                </div>
                <div className="mt-8 mx-auto w-80 max-w-screen-lg lg:w-1/2">
                    <div className="mb-6">
                        <Typography variant="small" color="blue-gray" className="font-medium">Title:</Typography>
                        <Typography variant="paragraph">{book.title}</Typography>
                    </div>
                    <div className="mb-6">
                        <Typography variant="small" color="blue-gray" className="font-medium">Author:</Typography>
                        <Typography variant="paragraph">{book.author}</Typography>
                    </div>
                    <div className="mb-6">
                        <Typography variant="small" color="blue-gray" className="font-medium">Isbn:</Typography>
                        <Typography variant="paragraph">{book.isbn}</Typography>
                    </div>
                    <div className="mb-6">
                        <Typography variant="small" color="blue-gray" className="font-medium">Gender:</Typography>
                        <Typography variant="paragraph">{book.gender}</Typography>
                    </div>
                    <div>
                        <img src={process.env.API_URL + "/storage/" + book.qr} ></img>
                    </div>
                    <div className="mt-6 flex justify-center w-full">
                        <Link to="/dashboard/books"><Button>Return</Button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookShow;
