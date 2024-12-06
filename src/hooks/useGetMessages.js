import { useState, useEffect } from "react"
import useConversation from "../zustand/useConversation"
import axios from "axios"
import toast from "react-hot-toast"
const useGetMessages = () => {
    const [loading, setLoading] = useState(false)
    const { selectedConversation, setMessages, messages } = useConversation()

    useEffect(() => {
        const getMessages = async () => {
            setLoading(true)
            try {
                const response = await axios.get(`/api/messages/${selectedConversation?._id}`)
                if (response.data.error) {
                    throw new Error(response.data.message)
                }
                setMessages(response.data)
            } catch (error) {
                toast.error(error.message)
            } finally {
                setLoading(false)
            }
        }
        getMessages()
        if (selectedConversation?._id) getMessages()
    },[selectedConversation?._id, setMessages])

    return { loading, messages }
}

export default useGetMessages