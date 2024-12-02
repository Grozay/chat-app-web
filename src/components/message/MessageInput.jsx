import { BsSend } from "react-icons/bs";
const MessageInput = () => {
  return (
    <form action='' className='px-4 my-3'>
        <div className='w-full relative'>
            <input type="text" className='border text-sm rounded-md w-full block p-2.5 bg-gray-700 border-gray-600 text-white pr-10' placeholder='Send a message' />
            <button type='submit' className='absolute inset-y-0 right-0 flex items-center pr-3'>
                <BsSend/>
            </button>
        </div>
    </form>
  )
}

export default MessageInput