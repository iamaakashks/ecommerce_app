import React from 'react'
import { Home } from './Home'
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const Login = ()=>{
    return (
        <div className='h-full bg-zinc-900 text-white '>
            <div className='h-28 flex justify-center items-center'>
                <Link className='text-3xl' to='/'><FaHome /></Link>
            </div>
            <div className='border-[1px] w-[30%] p-4 m-auto flex flex-col gap-6'>
                <div className='flex justify-between items-center'>
                    <label for="email">Email</label>
                    <input id='email' type='email' placeholder='Email' className='outline-none bg-transparent border-[1px] rounded-md px-2 py-2' />
                </div>
                <div className='flex justify-between items-center'>
                    <label for="password">Password</label>
                    <input id='password' type='password' placeholder='Password' className='outline-none bg-transparent border-[1px] rounded-md px-2 py-2' />
                </div>
                <div className="flex justify-between">
                    <button className='border-[1px] px-4 py-1.5 rounded-lg bg-green-700'>Login</button>
                    <button className="cursor-pointer">Forgot Password?</button>
                </div>
            </div>
        </div>
    )
}