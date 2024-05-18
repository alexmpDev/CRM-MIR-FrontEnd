import { setEvents, setEvent, setCourses } from "./eventsSlice"

export const listAll = () => {
    return async (dispatch, getState) => {
        try {

            const list = async () => {
                const data = await fetch(process.env.API_URL + "/api/events", {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + getState().auth.authToken
                    },
                    method: "GET",
                })
                const response = await data.json()

                if (response) {
                    dispatch(setEvents(response))
                }
            }
            list()
        } catch (error) {
            console.log(error);
            alert("Catchch");
        }
    }
}

export const listAllCourses = () => {
    return async (dispatch, getState) => {
        try {
            const list = async () => {
                const data = await fetch(process.env.API_URL + "/api/course", {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + getState().auth.authToken
                    },
                    method: "GET",
                });
                const response = await data.json();
                console.log("Courses fetched:", response); // Añadido para depuración

                if (response) {
                    dispatch(setCourses(response));
                }
            };
            list();
        } catch (error) {
            console.log(error);
            alert("Catchch");
        }
    };
};

export const listOne = (id) => {
    return async (dispatch, getState) => {
        try {

            const list = async () => {
                const data = await fetch(process.env.API_URL + "/api/events/" + id, {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + getState().auth.authToken
                    },
                    method: "GET",
                })
                const response = await data.json()

                if (response) {
                    dispatch(setEvent(response))
                }
            }
            list()
        } catch (error) {
            console.log(error);
            alert("Catchch");
        }
    }
}

export const edit = (payload, id) => {
    return async (dispatch, getState) => {

        try {
            const formData = new FormData();
            formData.append("name", payload.name);
            formData.append("description", payload.description);
            formData.append("event_date", payload.event_date);
            console.log(formData)
            await fetch(process.env.API_URL + "/api/events/" + id , {
                headers: {
                    Accept: "application/json",
                    "Authorization": "Bearer " + getState().auth.authToken
                },
                method: "POST",
                body: formData
            })

        } catch (error) {
            console.log(error);
            alert("Catchch");
        }
    }
}

export const del = (id) => {
    return async (dispatch, getState) => {

        try {
            await fetch(process.env.API_URL + "/api/events/" + id , {
                headers: {
                    Accept: "application/json",
                    "Authorization": "Bearer " + getState().auth.authToken
                },
                method: "DELETE",
            })

        } catch (error) {
            console.log(error);
            alert("Catchch");
        }
    }
}

export const create = (payload) => {
    return async (dispatch, getState) => {

        try {
            const formData = new FormData();
            formData.append("name", payload.name);
            formData.append("description", payload.description);
            formData.append("event_date", payload.event_date);
            console.log(formData)
            await fetch(process.env.API_URL + "/api/events/" , {
                headers: {
                    Accept: "application/json",
                    "Authorization": "Bearer " + getState().auth.authToken
                },
                method: "POST",
                body: formData
            })

        } catch (error) {
            console.log(error);
            alert("Catchch");
        }
    }
}

export const assignCoursesToEvent = (eventId, courseIds) => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch(`${process.env.API_URL}/api/events/assign-courses`, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + getState().auth.authToken
                },
                method: "POST",
                body: JSON.stringify({ event_id: eventId, course_ids: courseIds })
            });
            const data = await response.json();
            if (response.ok) {
                dispatch(setEvent(data.event));
            } else {
                console.error(data);
            }
        } catch (error) {
            console.log(error);
        }
    };
};

export const unassignCoursesFromEvent = (eventId, courseIds) => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch(`${process.env.API_URL}/api/events/${eventId}/unassign-courses`, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + getState().auth.authToken
                },
                method: "DELETE",
                body: JSON.stringify({ course_ids: courseIds })
            });
            const data = await response.json();
            if (response.ok) {
                dispatch(setEvent(data.event));
            } else {
                console.error(data);
            }
        } catch (error) {
            console.log(error);
        }
    };
};

export const generateTicketsForEvent = (eventId) => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch(`${process.env.API_URL}/api/events/generate-tickets`, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + getState().auth.authToken
                },
                method: "POST",
                body: JSON.stringify({ event_id: eventId })
            });
            const data = await response.json();
            if (response.ok) {
                console.log(data.message);
            } else {
                console.error(data);
            }
        } catch (error) {
            console.log(error);
        }
    };
};

export const checkTicketsGenerated = (eventId) => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch(`${process.env.API_URL}/api/events/${eventId}/tickets-generated`, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + getState().auth.authToken
                },
                method: "GET",
            });
            const data = await response.json();
            return data.tickets_generated;
        } catch (error) {
            console.log(error);
            return false;
        }
    };
};

