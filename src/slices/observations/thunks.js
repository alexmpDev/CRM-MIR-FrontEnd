import { setObservations } from "./observationsSlice"


export const listAll = (studentId ) => {
    return async (dispatch, getState) => {
        try {


            const list = async () => {
                const data = await fetch("http://localhost:8000/api/students/" + studentId + "/observations", {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    method: "GET",
                })
                const response = await data.json()

                if (response) {
                    dispatch(setObservations(response))
                }
            }
            list()
        } catch (error) {
            console.log(error);
            alert("Catchch");
        }
    }
}

// export const create = (payload, studentId ) => {
//     return async (dispatch, getState) => {
//         try {

//             payload.student_id = studentId;
//             const crea = async () => {
//                 const data = await fetch("http://localhost:8000/api/students/phoneinfo", {
//                     headers: {
//                         Accept: "application/json",
//                         "Content-Type": "application/json"
//                     },
//                     method: "POST",
//                     body: JSON.stringify(payload)
//                 })

//             }
//             crea()
//         } catch (error) {
//             console.log(error);
//             alert("Catchch");
//         }
//     }
// }

// export const listOne = (id) => {
//     return async (dispatch, getState) => {
//         try {
//             const lis = async () => {
//                 const data = await fetch("http://localhost:8000/api/students/phones/" + id, {
//                     headers: {
//                         Accept: "application/json",
//                         "Content-Type": "application/json"
//                     },
//                     method: "GET",
//                 })

//                 const response = await data.json()

//                 if (response) {
//                     dispatch(setPhone(response[0]))

//                 }

//             }
//             lis()
//         } catch (error) {
//             console.log(error);
//             alert("Catchch");
//         }
//     }
// }

// export const edit = (payload, id) => {
//     return async (dispatch, getState) => {
//         try {
//             const edi = async () => {
//                 payload.student_id = id
//                 const data = await fetch("http://localhost:8000/api/students/phoneinfo/" + id, {
//                     headers: {
//                         Accept: "application/json",
//                         "Content-Type": "application/json"
//                     },
//                     method: "POST",
//                     body: JSON.stringify(payload)
//                 })

//             }
//             edi()
//         } catch (error) {
//             console.log(error);
//             alert("Catchch");
//         }
//     }
// }

export const del = ( id) => {
    return async (dispatch, getState) => {
        try {
            const de = async () => {

                const data = await fetch("http://localhost:8000/api/students/observations/" + id, {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
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



