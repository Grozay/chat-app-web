import { useState } from "react"
import useConversation from "../zustand/useConversation"
import axios from "axios"
import toast from "react-hot-toast"

const useSendMessage = () => {
    const [loading, setLoading] = useState(false)
    const { selectedConversation, setMessages, messages } = useConversation()

    const sendMessage = async (message) => {
        setLoading(true)
        try {
            if (!selectedConversation || !selectedConversation._id) {
                throw new Error("No selected conversation")
            }

            if (!message){
                throw new Error('Message cannot be empty')
            }

            const response = await axios.post(`/api/messages/send/${selectedConversation._id}`, {
                message
            })
            if (response.data.error) {
                throw new Error(response.data.message)
            }
            setMessages([...messages, response.data])
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }

    return { sendMessage, loading }
}

export default useSendMessage