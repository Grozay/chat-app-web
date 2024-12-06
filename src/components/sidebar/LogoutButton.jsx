import { BiLogOut } from 'react-icons/bi'
import useLogout from '../../hooks/useLogout'
const LogoutButton = () => {
  const {logout, loading} = useLogout()
  return (
    <div className='mt-auto flex items-center gap-2 cursor-pointer ' >
        {!loading ? 
        <div className='tooltip' data-tip='Logout'>
          <BiLogOut className='w-6 h-6 text-white cursor-pointer' onClick={logout}/> 
        </div>
        :
         <span className='loading loading-spinner'></span>
        }
     </div>
  )
}

export default LogoutButton