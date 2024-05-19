import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { validateTicket } from "@/slices/events/thunks";
import { Button, Typography } from "@material-tailwind/react";

export function TicketValidation() {
    const { ticketId } = useParams();
    const dispatch = useDispatch();
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const validate = async () => {
            const resultMessage = await dispatch(validateTicket(ticketId));
            setMessage(resultMessage);
            setLoading(false);
        };

        validate();
    }, [dispatch, ticketId]);

    return (
        <div className="mt-12 mb-8 flex justify-center">
            <div className="w-full lg:w-3/5">
                <div className="text-center">
                    <Typography variant="h2" className="font-bold mb-4">Ticket Validation</Typography>
                    {loading ? (
                        <Typography variant="paragraph" className="text-lg font-normal">Validating ticket...</Typography>
                    ) : (
                        <Typography variant="paragraph" className="text-lg font-normal">{message}</Typography>
                    )}
                    <div className="mt-6">
                        <Button onClick={() => window.location.href = "/"}>Return to Home</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TicketValidation;
