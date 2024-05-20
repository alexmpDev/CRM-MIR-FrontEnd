import { setStudents, setStudent, setCourses } from "./studentsSlice"

export const listAll = () => {
    return async (dispatch, getState) => {
        try {

            const list = async () => {
                const data = await fetch(process.env.API_URL + "/api/students", {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + getState().auth.authToken
                    },
                    method: "GET",
                })
                const response = await data.json()

                if (response) {
                    dispatch(setStudents(response))
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
                })
                const response = await data.json()

                if (response) {
                    dispatch(setCourses(response))
                }
            }
            list()
        } catch (error) {
            console.log(error);
            alert("Catchch");
        }
    }
}

export const listOne = (id) => {
    return async (dispatch, getState) => {
        try {

            const list = async () => {
                const data = await fetch(process.env.API_URL + "/api/students/" + id, {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + getState().auth.authToken
                    },
                    method: "GET",
                })
                const response = await data.json()

                if (response) {
                    dispatch(setStudent(response))
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
            formData.append("surname1", payload.surname1);
            formData.append("surname2", payload.surname2);
            formData.append("email", payload.email);
            formData.append("course_id", payload.course_id);
            formData.append("dni", payload.dni);
            formData.append("birthDate", payload.birthDate);
            formData.append("leave", payload.leave); 
            console.log(payload.photo)
            if (payload.photo.length > 0) {
                formData.append("photo", payload.photo[0]); // Se adjunta el archivo solo si existe
            }
            console.log(formData)
            await fetch(process.env.API_URL + "/api/students/" + id , {
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
            await fetch(process.env.API_URL + "/api/students/" + id , {
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
            formData.append("surname1", payload.surname1);
            formData.append("surname2", payload.surname2);
            formData.append("email", payload.email);
            formData.append("course_id", payload.course_id);
            formData.append("dni", payload.dni);
            formData.append("birthDate", payload.birthDate);
            formData.append("leave", payload.leave ? 1 : 0); // Convertir leave a 0 o 1
            console.log(payload.photo)
            if (payload.photo.length > 0) {
                formData.append("photo", payload.photo[0]); // Se adjunta el archivo solo si existe
            }
            console.log(formData)
            await fetch(process.env.API_URL + "/api/students/" , {
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


