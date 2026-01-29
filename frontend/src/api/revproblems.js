import axios from "axios"
import { setProblems } from "../slices/problemSlice";

const baseurl = `${import.meta.env.VITE_BACKEND_URL}/problems`;
export const getProblems = () => async (dispatch, getState) => {

    try {
        const { data } = await axios.get(baseurl, {
            headers: {
                Authorization: localStorage.getItem('token'),
            }
        })
        dispatch(setProblems(data))
    } catch (err) {
        return err
    }
} 