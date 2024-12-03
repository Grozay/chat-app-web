import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home.jsx'
import Login from './pages/login/Login'
import Signup from './pages/signup/SignUp.jsx'
import { Toaster } from 'react-hot-toast'


function App() {

  return (
    <div className='p-4 h-screen flex justify-center items-center'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
