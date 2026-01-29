import axios from "axios"

export const findUser = async (email, password) => {
   const user = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/login`, { email, password }, { withCredentials: true });
   return user;
}