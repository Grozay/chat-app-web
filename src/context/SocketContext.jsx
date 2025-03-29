import { createContext, useContext, useEffect, useState } from "react"
import { useAuthContext } from "./AuthContext"
import io from 'socket.io-client'



const SocketContext = createContext()

export const useSocketContext = () => {
    return useContext(SocketContext)
}

// eslint-disable-next-line react/prop-types
export const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null)
    const [onlineUsers, setOnlineUsers] = useState([])
    const {authUser} = useAuthContext()

    useEffect(() => {
        if(authUser){
            const newSocket = io('https://chat-app-api-n3tv.onrender.com',{
                query:{
                    userId: authUser._id
                }
            })
            setSocket(newSocket)

            //newSocket.on() is used to listen to the events. can be used both on client and server side
            newSocket.on('getOnlineUsers', (users) => {
                setOnlineUsers(users)
            })

            return () => {
                newSocket.close()
            }
        }else{
            if (socket) {
                socket.disconnect()
                setSocket(null)
            }
        }
    }, [authUser])
    return (
        <SocketContext.Provider value={{socket, onlineUsers}}>
            {children}
        </SocketContext.Provider>
    )
}
