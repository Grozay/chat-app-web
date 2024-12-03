import { Link } from 'react-router-dom'
import GenderCheckBox from './GenderCheckBox'
import { useState } from 'react'    
import useSignup from '../../hooks/useSignup'
const SignUp = () => {
    const {signup, loading} = useSignup()
    const [inputs, setInput] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: ''  
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        signup(inputs)
    }

    const handleCheckBoxChange = (gender) => {
        setInput({ ...inputs, gender: gender })
    }

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-opacity-0 backdrop-filter backdrop-blur-lg db-clip-padding'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    Sign Up
                    <span className='text-blue-500'>ChatApp</span>
                </h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='label-text text-base'>Full Name</span>
                        </label>
                        <input type="text" placeholder='Example:  "John Doe"' className='input input-bordered w-full h-10'
                            value={inputs.fullName}
                            onChange={(e) => setInput({ ...inputs, fullName: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='label-text text-base'>Username</span>
                        </label>
                        <input type="text" placeholder='Example: "johndoe"' className='input input-bordered w-full h-10'
                            value={inputs.username}
                            onChange={(e) => setInput({ ...inputs, username: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='label-text text-base'>Password</span>
                        </label>
                        <input type="password" placeholder='Enter Password' className='input input-bordered w-full h-10'
                            value={inputs.password}
                            onChange={(e) => setInput({ ...inputs, password: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='label-text text-base'>Confirm Password</span>
                        </label>
                        <input type="password" placeholder='Confirm Password' className='input input-bordered w-full h-10'
                            value={inputs.confirmPassword}
                            onChange={(e) => setInput({ ...inputs, confirmPassword: e.target.value })}
                        />
                    </div>

                    {/* dender check box goes here */}
                    <GenderCheckBox onCheckboxChange={handleCheckBoxChange} selectedGender={inputs.gender} />
                    <Link to='/login' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                        Already have an account?
                    </Link>

                    <div>
                        <button className='btn btn-block mt-2 border border-slate-700' disabled={loading}>
                            {loading ? <span className='loading loading-spinner'></span> : 'Sign Up'}
                        </button >
                    </div>
                </form>
            </div>


        </div>
    )
}

export default SignUp