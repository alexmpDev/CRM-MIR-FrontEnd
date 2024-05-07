import { setStudents, setStudent } from "./studentsSlice"

export const listAll = () => {
    return async (dispatch, getState) => {
        try {

            const list = async () => {
                const data = await fetch("http://127.0.0.1:8000/api/students", {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
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

export const listOne = (id) => {
    return async (dispatch, getState) => {
        try {

            const list = async () => {
                const data = await fetch("http://127.0.0.1:8000/api/students/" + id, {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    method: "GET",
                })
                const response = await data.json()

                if (response) {
                    dispatch(setStudent(response[0]))
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
            formData.append("curs", payload.curs);
            formData.append("dni", payload.dni);
            formData.append("birthDate", payload.birthDate);
            console.log(payload.photo)
            if (payload.photo.length > 0) {
                formData.append("photo", payload.photo[0]); // Se adjunta el archivo solo si existe
            }
            console.log(formData)
            await fetch("http://127.0.0.1:8000/api/students/" + id , {
                headers: {
                    Accept: "application/json",
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

