import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-800'>
            <div className='bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-sm'>
                <h2 className='text-2xl font-bold text-white mb-6'>Login</h2>
                <form >
                    <div>
                        <label className='block text-gray-400 mb-2' htmlFor='email'>Email</label>
                        <input
                            type="email"
                            id='email'
                            className='w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                            required
                        />
                    </div>
                    <div>
                        <label className='block text-gray-400 mb-2' htmlFor='password'>Password</label>
                        <input
                            type="password"
                            id='password'
                            className='w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                            required
                        />
                    </div>
                    <button type="submit" className='w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'>
                        Login
                    </button>
                </form>
                <p className='text-gray-400 mt-4 text-center'>Don't have an account? <Link to="/register" className='text-blue-500 hover:underline'>Register</Link></p>
            </div>
        </div>
    )
}

export default Login