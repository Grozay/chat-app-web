import { useState } from "react"
import axios from "axios"
import toast from "react-hot-toast"
import { useAuthContext } from "../context/AuthContext.jsx"



const useLogin = () => {
    const [loading, setLoading] = useState(false)
    const {setAuthUser} = useAuthContext()
    const login = async (username, password) => {
        const success = handleInputError(username, password)
        if (!success) return
        setLoading(true)
        try {
            const response = await axios.post('/api/auth/login', {username, password})
            if (response.data.error) {
                throw new Error(response.data.error)
            }
            //local storage
            localStorage.setItem('chat-user', JSON.stringify(response.data.user))
            //context
            setAuthUser(response.data.user)
            toast.success(response.data.message)
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }

    return {login, loading}
}

export default useLogin

const handleInputError = (username, password) => {
    if (!username || !password) {
        toast.error('Please fill all the fields')
        return false
    }
    return true
}