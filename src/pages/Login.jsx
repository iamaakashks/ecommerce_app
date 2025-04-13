import React, { useState } from 'react'
import { Home } from './Home'
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const Login = ()=>{
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const handleCreateButton = (e)=>{
        e.preventDefault();
        if(password === confirmPassword && password.length > 6 && password.trim()!=''){
            alert('Account Created Successfully')
        }else{
            alert("Password must match Re-enter password\nPassword must be of 6 characters\nPassword can't be just spaces");
            return;
        }  
    }
    return (
        <div className='h-full w-full flex flex-col gap-y-8'>
            <div className='h-28 flex'>
                <Link className='text-3xl m-auto' to='/'><FaHome /></Link>
            </div>
            <p className='mx-auto'>Create New Account</p>
            <form className='border-[1px] border-black w-[30%] p-4 flex flex-col gap-6 mx-auto'>
                <div className='flex justify-between items-center'>
                    <label for="email">Email</label>
                    <input required id='email' type='email' placeholder='Email' className='w-3/5 outline-none bg-transparent border-[1px] border-black rounded-md px-2 py-2' />
                </div>
                <div className='flex justify-between items-center'>
                    <label for="password">Password</label>
                    <input onChange={
                        (e)=>{
                            setPassword(e.target.value);
                        }
                    } value={password} required id='password' type='text' placeholder='Password' className='w-3/5 outline-none bg-transparent border-black border-[1px] rounded-md px-2 py-2' />
                </div>
                <div className='flex justify-between items-center'>
                    <label for="confirmpassword">Re-enter Password</label>
                    <input onChange={
                        (e)=>{
                            setConfirmPassword(e.target.value);
                        }
                    } value={confirmPassword} required id='confirmpassword' type='password' placeholder='Password' className='w-3/5 outline-none bg-transparent border-black border-[1px] rounded-md px-2 py-2' />
                </div>
                <div className="flex justify-between">
                    <button onClick={(e)=>handleCreateButton(e)} type='submit' className='border-[1px] px-4 py-1.5 rounded-lg bg-black text-white font-semibold'>Create Account</button>
                    <p className="font-thin">Already have an Account? <button className='font-bold'>Login</button></p>
                </div>
            </form>
        </div>
    )
}