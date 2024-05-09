import { setPhones } from "./phonesSlice"


export const listAll = (studentId ) => {
    return async (dispatch, getState) => {
        try {


            const list = async () => {
                const data = await fetch("http://localhost:8000/api/students/" + studentId + "/phones", {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
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
                const data = await fetch("http://localhost:8000/api/students/phoneinfo", {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
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



