import { setPhone, setPhones } from "./phonesSlice"


export const listAll = (studentId ) => {
    return async (dispatch, getState) => {
        try {


            const list = async () => {
                const data = await fetch(process.env.API_URL + "/api/students/" + studentId + "/phones", {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + getState().auth.authToken
                    },
                    method: "GET",
                })
                const response = await data.json()

                if (response) {
                    dispatch(setPhones(response))
                }
            }
            list()
        } catch (error) {
            console.log(error);
            alert("Catchch");
        }
    }
}

export const create = (payload, studentId ) => {
    return async (dispatch, getState) => {
        try {

            payload.student_id = studentId;
            const crea = async () => {
                const data = await fetch(process.env.API_URL + "/api/students/phoneinfo", {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + getState().auth.authToken
                    },
                    method: "POST",
                    body: JSON.stringify(payload)
                })

            }
            crea()
        } catch (error) {
            console.log(error);
            alert("Catchch");
        }
    }
}

export const listOne = (id) => {
    return async (dispatch, getState) => {
        try {
            const lis = async () => {
                const data = await fetch(process.env.API_URL + "/api/students/phones/" + id, {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + getState().auth.authToken
                    },
                    method: "GET",
                })

                const response = await data.json()

                if (response) {
                    dispatch(setPhone(response[0]))

                }

            }
            lis()
        } catch (error) {
            console.log(error);
            alert("Catchch");
        }
    }
}

export const edit = (payload, id) => {
    return async (dispatch, getState) => {
        try {
            const edi = async () => {
                payload.student_id = id
                const data = await fetch(process.env.API_URL + "/api/students/phoneinfo/" + id, {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + getState().auth.authToken
                    },
                    method: "POST",
                    body: JSON.stringify(payload)
                })

            }
            edi()
        } catch (error) {
            console.log(error);
            alert("Catchch");
        }
    }
}

export const del = ( id) => {
    return async (dispatch, getState) => {
        try {
            const de = async () => {

                const data = await fetch(process.env.API_URL + "/api/students/phoneinfo/" + id, {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + getState().auth.authToken
                    },
                    method: "DELETE",
                })

            }
            de()
        } catch (error) {
            console.log(error);
            alert("Catchch");
        }
    }
}



