import { setReservation, setReservations } from "./reservationsSlice";

export const listAll = () => {
    return async (dispatch, getState) => {
        try {
            const list = async () => {
                const data = await fetch("http://localhost:8000/api/reservations", {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    method: "GET",
                })
                const response = await data.json()

                if (response) {
                    dispatch(setReservations(response))
                }
            }
            list()
        } catch (error) {
            console.log(error);
            alert("Catchch");
        }
    }
}

// export const listOne = (id) => {
//     return async (dispatch, getState) => {
//         try {

//             const list = async () => {
//                 const data = await fetch("http://127.0.0.1:8000/api/books/" + id, {
//                     headers: {
//                         Accept: "application/json",
//                         "Content-Type": "application/json"
//                     },
//                     method: "GET",
//                 })
//                 const response = await data.json()

//                 if (response) {
//                     dispatch(setBook(response[0]))
//                 }
//             }
//             list()
//         } catch (error) {
//             console.log(error);
//             alert("Catchch");
//         }
//     }
// }

export const edit = (id) => {
    return async (dispatch, getState) => {
        try {

            await fetch("http://127.0.0.1:8000/api/reservations/" + id , {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                method: "POST",
                body:  JSON.stringify([])
            })

        } catch (error) {
            console.log(error);
            alert(error);
        }
    }
}


export const del = (id) => {
    return async (dispatch, getState) => {

        try {
            await fetch("http://127.0.0.1:8000/api/reservations/" + id , {
                headers: {
                    Accept: "application/json",
                },
                method: "DELETE",
            })

        } catch (error) {
            console.log(error);
            alert("Catchch");
        }
    }
}

// export const create = (payload) => {
//     return async (dispatch, getState) => {

//         try {
//             await fetch("http://127.0.0.1:8000/api/books/" , {
//                 headers: {
//                     Accept: "application/json",
//                     "Content-Type": "application/json"
//                 },
//                 method: "POST",
//                 body: JSON.stringify(payload)
//             })

//         } catch (error) {
//             console.log(error);
//             alert("Catchch");
//         }
//     }
// }

