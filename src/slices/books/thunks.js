import { setBooks, setBook } from "./booksSlice"

export const listAll = (title = null, author = null, gender = null) => {
    return async (dispatch, getState) => {
        try {

            let params = new URLSearchParams();
            if ( title != null) {
                params.set("title", title)
            }
            if (author != null) {
                params.set("author", author)
            }
            if (gender != null) {
                params.set("gender", gender)
            }

            const list = async () => {
                const data = await fetch("http://localhost:8000/api/books/filter?"+ params, {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    method: "GET",
                })
                const response = await data.json()

                if (response) {
                    dispatch(setBooks(response))
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
                const data = await fetch("http://127.0.0.1:8000/api/books/" + id, {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    method: "GET",
                })
                const response = await data.json()

                if (response) {
                    dispatch(setBook(response[0]))
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

            await fetch("http://127.0.0.1:8000/api/books/" + id , {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                method: "PUT",
                body: JSON.stringify(payload)
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
            await fetch("http://127.0.0.1:8000/api/books/" + id , {
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
//             const formData = new FormData();
//             formData.append("name", payload.name);
//             formData.append("surname1", payload.surname1);
//             formData.append("surname2", payload.surname2);
//             formData.append("curs", payload.curs);
//             formData.append("dni", payload.dni);
//             formData.append("birthDate", payload.birthDate);
//             formData.append("leave", payload.leave);
//             console.log(payload.photo)
//             if (payload.photo.length > 0) {
//                 formData.append("photo", payload.photo[0]); // Se adjunta el archivo solo si existe
//             }
//             console.log(formData)
//             await fetch("http://127.0.0.1:8000/api/students/" , {
//                 headers: {
//                     Accept: "application/json",
//                 },
//                 method: "POST",
//                 body: formData
//             })

//         } catch (error) {
//             console.log(error);
//             alert("Catchch");
//         }
//     }
// }

