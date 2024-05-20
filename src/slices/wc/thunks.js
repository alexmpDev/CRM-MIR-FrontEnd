import { setWc } from "./wcSlice";

export const listAll = () => {
    return async (dispatch, getState) => {
        try {
            const list = async () => {
                const data = await fetch(process.env.API_URL + "/api/wc", {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + getState().auth.authToken
                    },
                    method: "GET",
                })
                const response = await data.json()

                if (response) {
                    dispatch(setWc(response))
                }
            }
            list()
        } catch (error) {
            console.log(error);
            alert("Catchch");
        }
    }
}


export const create = (payload) => {
    return async (dispatch, getState) => {

        try {
            await fetch(process.env.API_URL + "/api/wc" , {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + getState().auth.authToken
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

