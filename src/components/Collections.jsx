import React from 'react'
import { FaAnglesRight, FaAnglesLeft } from "react-icons/fa6";
import {useNavigate} from 'react-router-dom'

export default function Collections(){
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate('/api/products')
    }
    return (
        <div className='w-full max-h-screen p-5 font-thin'>
            <button onClick={handleClick} className='group m-auto text-2xl border-[1px] border-black px-5 py-2.5 rounded-full flex items-center gap-2'><FaAnglesLeft className='group-hover:-translate-x-2 transform-all duration-700' />Latest Collections<FaAnglesRight className='group-hover:translate-x-2 transform-all duration-700' /></button>
        </div>
    )
}