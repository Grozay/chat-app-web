import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-opacity-0 backdrop-filter backdrop-blur-lg db-clip-padding'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    Login
                    <span className='text-blue-500'>ChatApp</span>
                </h1>

                <form>
                    <div>
                        <label className='label p-2'>
                            <span className='label-text text-base'>Username</span>
                        </label>
                        <input type="text" placeholder='Enter Username' className='input input-bordered w-full h-10' />
                    </div>

                    <div>
                        <label className='label p-2'>
                            <span className='label-text text-base'>Password</span>
                        </label>
                        <input type="password" id='password' placeholder='Enter Password' className='input input-bordered w-full h-10' />
                    </div>
                    <Link to='/signup' className='text-sm hover:underline hover:text-blue-600 mt-3 inline-block'>
                        {'Don\'t'} have an account?
                    </Link>

                    <div className='mt-4'>
                        <button className='btn btn-block btn-sm mt-2'>Login</button >
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login