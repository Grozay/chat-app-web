import { useState } from 'react'
import { toast } from 'react-hot-toast'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const useSignup = () => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const signup = async ({fullName, username, password, confirmPassword, gender}) => {
       const success = handleInputError(fullName, username, password, confirmPassword, gender)
       if (!success) return

       setLoading(true) 
       try {
        const response = await axios.post('/api/auth/signup', {fullName, username, password, confirmPassword, gender})      
        toast.success(response.data.message)
        navigate('/login')
       } catch (error) {
        toast.error(error.response.data.message)
       } finally {
        setLoading(false)
       }
    } 

    return {signup, loading}
}

export default useSignup

const handleInputError = (fullName, username, password, confirmPassword, gender) => {
    if (!fullName || !username || !password || !confirmPassword || !gender) {
        toast.error('Please fill all the fields')
        return false
    }

    if (password !== confirmPassword) {
        toast.error('Password and Confirm Password do not match')
        return false
    }

    if (password.length < 6) {
        toast.error('Password must be at least 6 characters long')
        return false
    }

    return true
}