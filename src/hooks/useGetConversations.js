import { useState, useEffect } from "react"
import axios from "axios"
import toast from "react-hot-toast"
const useConversation = () => {
    const [loading, setLoading] = useState(false)
    const [conversations, setConversations] = useState([])

    useEffect(() => {
        const getConversations = async () => {
            setLoading(true)
            try {
                const response = await axios.get("/api/users")
                setConversations(response.data)
                if (response.data.error) {
                    throw new Error(response.data.error)
                }
            } catch (error) {
                toast.error(error.message)
            } finally {
                setLoading(false)
            }
        }
        getConversations()
    }, [])

    return { loading, conversations }
}

export default useConversation;