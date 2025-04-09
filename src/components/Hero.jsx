import { useEffect, useState } from 'react';
import hero_img2 from '../assets/hero_img2.jpg';
import { IoIosArrowDropright } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

export default function Hero(){
    const navigate = useNavigate();
    const handleClick = (e)=>{
        const buttonText = e.target.textContent;
        let extractedGender = buttonText.slice(9).trim();
        if(extractedGender === 'her'){
            extractedGender = 'women';
        }else if(extractedGender === 'him'){
            extractedGender = 'men';
        }else{
            extractedGender = 'kids';
        }
        navigate(`/category/${extractedGender}`)
    }
    return (
        <div className="h-full flex justify-center">
            <div className='w-[80%] h-full relative'>
                <img className='border-[1px] border-black h-full w-full object-cover' src={hero_img2} alt="" />
                <button onClick={(e)=>handleClick(e)} className='group absolute left-10 bottom-8 border-[1px] py-2.5 px-4 backdrop-blur-md bg-black/30 text-white rounded-full flex items-center gap-1'>shop for her<IoIosArrowDropright className="text-3xl transition-all duration-700 group-hover:translate-x-2"/></button>
            </div>
        </div>
    )
}