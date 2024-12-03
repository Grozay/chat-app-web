import { useState } from "react"
import axios from "axios"
import toast from "react-hot-toast"
import { useAuthContext } from "../context/AuthContext.jsx"
const useLogout = () => {
    const [loading, setLoading] = useState(false)
    const {setAuthUser} = useAuthContext()
    const logout = async () => {
        setLoading(true)
       try {
        const response = await axios.post('/api/auth/logout')
        toast.success(response.data.message)
        if (response.data.error) {
            throw new Error(response.data.error)
        }

        //local storage
        localStorage.removeItem('chat-user')
        //context
        setAuthUser(null)
       } catch (error) {
        toast.error(error.response.data.error)
       } finally {
        setLoading(false)
       }
    }

    return {logout, loading}
}

export default useLogout