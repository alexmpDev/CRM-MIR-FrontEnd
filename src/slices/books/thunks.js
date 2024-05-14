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
                const data = await fetch(process.env.API_URL + "/api/books/filter?"+ params, {
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
                const data = await fetch(process.env.API_URL + "/api/books/" + id, {
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

            await fetch(process.env.API_URL + "/api/books/" + id , {
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
            await fetch(process.env.API_URL + "/api/books/" + id , {
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

export const create = (payload) => {
    return async (dispatch, getState) => {

        try {
            await fetch(process.env.API_URL + "/api/books/" , {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify(payload)
            })

        } catch (error) {
            console.log(error);
            alert("Catchch");
        }
    }
}

