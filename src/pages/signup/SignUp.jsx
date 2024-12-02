import GenderCheckBox from './GenderCheckBox'

const SignUp = () => {
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
                            <span className='label-text text-base'>Full Name</span>
                        </label>
                        <input type="text" placeholder='Example:  "John Doe"' className='input input-bordered w-full h-10' />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='label-text text-base'>Username</span>
                        </label>
                        <input type="text" placeholder='Example: "johndoe"' className='input input-bordered w-full h-10' />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='label-text text-base'>Password</span>
                        </label>
                        <input type="password" placeholder='Enter Password' className='input input-bordered w-full h-10' />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='label-text text-base'>Confirm Password</span>
                        </label>
                        <input type="password" placeholder='Confirm Password' className='input input-bordered w-full h-10' />
                    </div>

                    {/* dender check box goes here */}
                    <GenderCheckBox />
                    <a href='#' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                        Already have an account?
                    </a>

                    <div>
                        <button className='btn btn-block mt-2 border border-slate-700'>Sign Up</button >
                    </div>
                </form>
            </div>


        </div>
    )
}

export default SignUp