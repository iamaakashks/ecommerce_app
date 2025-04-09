import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
export const Navbar = ()=>{
    const navigate = useNavigate();
    const options = ['Category', 'Men', 'Women', 'Kids'];
    const [category, setCategory] = useState('');


    const handleCategoryChange = (category)=>{
        setCategory(category);
        if(category !== 'category'){
            navigate(`/category/${category}`)
        }
    }
    
    return (
        <div className="h-20">
            <div className="flex items-center h-full px-10">
                <div className="flex w-[35%] h-full gap-20 justify-center items-center">
                    <Link to='/'><button className="">Home</button></Link>
                    <select className="outline-none bg-transparent" name="category" value={category} onChange={(e)=>handleCategoryChange(e.target.value)}>
                        {
                           options.map((option, index)=>{
                            return <option key={index} id={`${option}`}>{option}</option>
                           }) 
                        }
                    </select>
                </div>
                <div className="text-white w-[30%] h-full items-center bg-black flex justify-center text-3xl">
                    <Link to='/'>House of Mandal</Link>
                </div>
                <div className="flex items-center w-[35%] justify-end gap-6">
                    <Link to="/login"><button className="border-[1px] border-black rounded-full px-4 py-1.5">Login</button></Link>
                    <button className="border-[1px] border-black rounded-full px-4 py-1.5">Signup</button>
                    <FaCartShopping className="text-2xl cursor-pointer"/>
                </div>
            </div>
        </div>
    )
}