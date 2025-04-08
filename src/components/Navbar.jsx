import { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
export const Navbar = ()=>{
    const navigate = useNavigate();
    const [clicked, setClicked] = useState('')
    const navItems = ['Home', 'Men', 'Women', 'Kids'];
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
                <div className="flex w-[33%] h-full gap-20 justify-center items-center">
                    <Link to='/'><button className="">Home</button></Link>
                    <select className="outline-none bg-transparent" name="category" value={category} onChange={(e)=>handleCategoryChange(e.target.value)}>
                        <option id="select">Category</option>
                        <option id='men'>Men</option>
                        <option id='women'>Women</option>
                        <option id='kids'>Kids</option>
                    </select>
                </div>
                <div className="text-white w-[33%] h-full items-center bg-black flex justify-center text-3xl">
                    <Link to='/'>NSG & AKS</Link>
                </div>
                <div className="flex items-center w-[33%] justify-end gap-6">
                    <Link to="/login"><button className="border-[1px] border-black rounded-full px-4 py-1.5">Login</button></Link>
                    <button className="border-[1px] border-black rounded-full px-4 py-1.5">Signup</button>
                    <FaCartShopping className="text-2xl cursor-pointer"/>
                </div>
            </div>
        </div>
    )
}