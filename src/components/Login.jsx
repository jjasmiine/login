import React from 'react'
import Loginjpg from '../assets/vr.jpg'

function Login() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full text-slate-200'>
            <div className='hidden sm:block'>
                <img className="w-full h-screen object-cover border-sm-2" src={Loginjpg} alt="vr" />
            </div>

            <div className='bg-blue-800 flex flex-col justify-center px-2'>
                <form className='max-w-[400px] w-full mx-auto bg-blue-100/25 p-4 rounded-md'>

                    <h2 className='text-4xl font-bold text-center py-6 uppercase font-bold'>Virtual Realism</h2>
                    <p className='text-center pb-5'>Load in to your virtual reality</p>

                    <div className='flex flex-col py-2'>
                        <label>UserCode</label>
                        <input className='border p-2 bg-blue-100/25 rounded-md border-none' type="text" />
                    </div>

                    <div className='flex flex-col py-2 '>
                        <label>Password</label>
                        <input className='border p-2 bg-blue-100/25 rounded-md border-none' type="password" />
                    </div>

                    <button className='border w-full my-5 py-2 bg-blue-900/50 rounded-md border-none hover:bg-blue-900/70 ease-in-out duration-200'>Load In</button>

                    <div className='flex justify-between'>
                        <p className='flex items-center'><input className='mr-1 hover:cursor-pointer' type="checkbox" />Remember Me</p>
                        <p className='hover:cursor-pointer hover:text-white ease-in-out duration-150'>Create an Account</p>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Login