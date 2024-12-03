import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home.jsx'
import Login from './pages/login/Login'
import Signup from './pages/signup/SignUp.jsx'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext.jsx'
import { Navigate } from 'react-router-dom'
function App() {
  const {authUser} = useAuthContext()
  
  return (
    <div className='p-4 h-screen flex justify-center items-center'>
      <Routes>
        <Route path='/' element={authUser ? <Home/> : <Navigate to='/login'/>}/>
        <Route path='/signup' element={authUser ? <Navigate to='/'/> : <Signup/>}/>
        <Route path='/login' element={authUser ? <Navigate to='/'/> : <Login/>}/>
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
