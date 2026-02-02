import { Link, useNavigate } from "react-router-dom"
import axios from '../config/axios';
import { useState } from "react";


const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();

        axios.post('/register',{
            email,
            password
        }).then((res)=>{
            console.log(res.data);
            navigate('/');
        }).catch((err)=>{
            console.log(err.response.data)
        })
    }
    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-800'>
            <div className='bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-sm'>
                <h2 className='text-2xl font-bold text-white mb-6'>Register</h2>
                <form  onSubmit={handleSubmit}>
                    <div>
                        <label className='block text-gray-400 mb-2' htmlFor='email'>Email</label>
                        <input
                        onChange={(e)=> setEmail(e.target.value)}
                            type="email"
                            id='email'
                            className='w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                            required
                        />
                    </div>
                    <div>
                        <label className='block text-gray-400 mb-2' htmlFor='password'>Password</label>
                        <input
                        onChange={(e)=>setPassword(e.target.value)}
                            type="password"
                            id='password'
                            className='w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                            required
                        />
                    </div>
                    <button type="submit" className='w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'>
                        register
                    </button>
                </form>
                <p className='text-gray-400 mt-4 text-center'>Already have an account? <Link to="/login" className='text-blue-500 hover:underline'>Login</Link></p>
            </div>
        </div>
    )
}

export default Register