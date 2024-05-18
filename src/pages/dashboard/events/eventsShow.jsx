import React, { useEffect, useState } from "react";
import { Typography, Button, Checkbox } from "@material-tailwind/react";
import { useSelector, useDispatch } from 'react-redux';
import { listOne, assignCoursesToEvent, unassignCoursesFromEvent, generateTicketsForEvent, listAllCourses, checkTicketsGenerated } from "@/slices/events/thunks";
import { Link, useParams } from "react-router-dom";

export function EventsShow() {
    const { event, courses } = useSelector(state => state.events);
    const dispatch = useDispatch();
    const { id } = useParams();
    const [selectedCourses, setSelectedCourses] = useState([]);
    const [ticketsGenerated, setTicketsGenerated] = useState(false);
    const [ticketsMessage, setTicketsMessage] = useState('');

    useEffect(() => {
        dispatch(listOne(id));
        dispatch(listAllCourses());
        dispatch(checkTicketsGenerated(id)).then(generated => setTicketsGenerated(generated));
    }, [dispatch, id]);

    useEffect(() => {
        console.log("Courses in component:", courses); // Añadido para depuración
    }, [courses]);

    const handleAssignCourses = () => {
        dispatch(assignCoursesToEvent(id, selectedCourses)).then(() => {
            dispatch(listOne(id));
            dispatch(checkTicketsGenerated(id)).then(generated => setTicketsGenerated(generated));
        });
    };

    const handleUnassignCourses = () => {
        const courseIds = event?.courses?.map(course => course.id) || [];
        dispatch(unassignCoursesFromEvent(id, courseIds)).then(() => {
            dispatch(listOne(id));
            dispatch(checkTicketsGenerated(id)).then(generated => setTicketsGenerated(generated));
        });
    };

    const handleGenerateTickets = () => {
        dispatch(generateTicketsForEvent(id)).then(() => {
            setTicketsGenerated(true);
            setTicketsMessage('Los tickets han sido creados exitosamente.');
        });
    };

    const handleCheckboxChange = (courseId) => {
        setSelectedCourses(prevSelectedCourses => {
            if (prevSelectedCourses.includes(courseId)) {
                return prevSelectedCourses.filter(id => id !== courseId);
            } else {
                return [...prevSelectedCourses, courseId];
            }
        });
    };

    return (
        <div className="mt-12 mb-8 flex justify-center">
            <div className="w-full lg:w-3/5">
                <div className="text-center">
                    <Typography variant="h2" className="font-bold mb-4">Details for id: {id}</Typography>
                </div>
                <div className="mt-8 mx-auto w-80 max-w-screen-lg lg:w-1/2">
                    <div className="mb-6">
                        <Typography variant="small" color="blue-gray" className="font-medium">Name:</Typography>
                        <Typography variant="paragraph" className="text-black">{event?.name}</Typography>
                    </div>
                    <div className="mb-6">
                        <Typography variant="small" color="blue-gray" className="font-medium">Description:</Typography>
                        <Typography variant="paragraph" className="text-black">{event?.description}</Typography>
                    </div>
                    <div className="mb-6">
                        <Typography variant="small" color="blue-gray" className="font-medium">Date:</Typography>
                        <Typography variant="paragraph" className="text-black">{event?.event_date}</Typography>
                    </div>

                    <div className="mb-6">
                        <Typography variant="small" color="blue-gray" className="font-medium">Courses:</Typography>
                        {event?.courses?.map(course => (
                            <Typography key={course.id} variant="paragraph" className="text-black">{course.name}</Typography>
                        ))}
                    </div>

                    {event?.courses?.length > 0 ? (
                        <>
                            <div className="mt-6 flex justify-center w-full">
                                <Button className="mr-2" onClick={handleUnassignCourses}>Unassign Courses</Button>
                                {!ticketsGenerated && (
                                    <Button onClick={handleGenerateTickets}>Generate Tickets</Button>
                                )}
                            </div>
                            {ticketsGenerated && (
                                <div className="mt-6">
                                    <Typography variant="small" color="green" className="font-medium">
                                        {ticketsMessage || 'Los tickets ya han sido creados.'}
                                    </Typography>
                                </div>
                            )}
                            <div className="mt-6">
                                <Typography variant="small" color="blue-gray" className="font-medium">
                                    Este evento está disponible para los siguientes cursos:
                                </Typography>
                                {event.courses.map(course => (
                                    <Typography key={course.id} variant="paragraph" className="text-black">
                                        {course.name || course.curs}
                                    </Typography>
                                ))}
                            </div>
                        </>
                    ) : (
                        <div className="mb-6">
                            <Typography variant="small" color="blue-gray" className="font-medium">Assign Courses:</Typography>
                            {courses.map(course => (
                                <div key={course.id} className="flex items-center">
                                    <Checkbox
                                        id={`course-${course.id}`}
                                        checked={selectedCourses.includes(course.id)}
                                        onChange={() => handleCheckboxChange(course.id)}
                                    />
                                    <label htmlFor={`course-${course.id}`} className="ml-2 text-black">
                                        {course.name || course.curs} {/* Printar course.name o course.curs */}
                                    </label>
                                </div>
                            ))}
                            <Button onClick={handleAssignCourses} className="mt-2">Assign Courses</Button>
                        </div>
                    )}

                    <div className="mt-6 flex justify-center w-full">
                        <Link to={"/students/phone/" + id}><Button className="mr-2">Courses</Button></Link>
                        <Link to="/dashboard/events"><Button>Return</Button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventsShow;
