import { useEffect, useState } from 'react';
import menImg from '../assets/hero_img1.jpg';
import womenImg from '../assets/hero_img2.jpg';
import kidsImg from '../assets/hero_img3.jpg';
import { IoIosArrowDropright } from 'react-icons/io';
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import { useNavigate } from 'react-router-dom';

export default function Hero(){
    const images = [
        {category: 'men', src: menImg},
        {category: 'women', src: womenImg},
        {category: 'kids', src: kidsImg}
    ]
    const [currentIndex, setCurrentIndex] = useState(0);
    const setPrev = ()=>{
        setCurrentIndex((prev)=> prev === 0 ? prev=images.length - 1 : prev = prev - 1)
    }
    const setNext = ()=>{
        setCurrentIndex((prev) => prev === images.length-1 ? 0 : prev+1);
    }
    const currentImage = images[currentIndex];
    const navigate = useNavigate();
    const handleClick = (e)=>{
        const buttonText = e.target.textContent;
        let extractedGender = buttonText.slice(9).trim();
        navigate(`/category/${extractedGender}`)
    }
    return (
        <div className="h-full flex justify-center">
            <div className='w-[80%] h-full relative'>
                <img className='h-full w-full object-cover' src={currentImage.src} alt="" />
                <button onClick={(e)=>handleClick(e)} className='group absolute left-10 bottom-8 border-[1px] py-2.5 px-4 backdrop-blur-md bg-black/30 text-white rounded-full flex items-center gap-1 font-thin'>shop for {currentImage.category}<IoIosArrowDropright className="text-3xl transition-all duration-700 group-hover:translate-x-2"/></button>
                <div className='absolute bottom-8 right-10 text-white text-4xl flex gap-1'>
                    <GoChevronLeft onClick={setPrev} className='backdrop-blur-sm transition-all duration-300 hover:pr-2'/>
                    <h4 className='text-2xl'>{currentIndex+1} / {images.length}</h4>
                    <GoChevronRight onClick={setNext} className='backdrop-blur-sm transition-all duration-300 hover:pl-2'/>
                </div>
            </div>
        </div>
    )
}