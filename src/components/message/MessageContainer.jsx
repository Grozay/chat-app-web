import Messages from "./Messages.jsx"
import MessageInput from "./MessageInput.jsx"
import { TiMessages } from "react-icons/ti";
import useConversation from "../../zustand/useConversation.js";
import { useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
    const { selectedConversation, setSelectedConversation } = useConversation()
    useEffect(() => {
        return () => {
            setSelectedConversation(null)
        }
    }, [setSelectedConversation])
    return (
        <div className='md:min-w-[450px] flex flex-col'>
            {!selectedConversation ? <NoChatSelected /> :
                <>
                    {/* Header */}
                    <div className='bg-slate-500 px-4 py-2 mb-2'>
                        <span className='label-text'>
                            To:
                        </span>
                        <span className='text-gray-900 font-bold'>
                            {selectedConversation.fullName}
                        </span>
                    </div>

                    <Messages />
                    <MessageInput />
                </>
            }
        </div>
    )
}


const NoChatSelected = () => {
    const {authUser} = useAuthContext()
    return (
        <div className='flex items-center justify-center h-full w-full'>
            <div className='px-4 text-center ms:text-lg md:text-xl text-gray-200 font-semibold flex flex-col gap-2 items-center'>
                <p>Welcome {authUser.fullName} </p>
                <p>Select a chat to start messaging</p>
                <TiMessages className='text-3xl md:text-6xl text-center' />
            </div>
        </div>
    )
}

export default MessageContainer