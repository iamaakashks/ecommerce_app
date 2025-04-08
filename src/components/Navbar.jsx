import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
export const Navbar = ()=>{
    const [clicked, setClicked] = useState('')
    const navItems = ['Home', 'Men', 'Women', 'Kids']
    return (
        <div className="h-20 bg-red-500 text-white">
            <div className="flex items-center h-full px-10">
                <ul className="flex w-[70%] gap-28 justify-center">
                    {navItems.map((items)=>{
                        return (
                            <li key={items}>
                                <Link to={`/${items.toLowerCase() === 'home' ? '':`category/${items.toLowerCase()}`}`} onClick={()=>setClicked(`${items}`)} className={`${clicked === items ? 'underline underline-offset-4 font-bold' : 'hover:underline-offset-4 hover:underline'} cursor-pointer`}>{items}</Link>
                            </li>
                        )
                    })}
                </ul>
                <div className="flex items-center w-[30%] justify-end gap-6">
                    <Link to="/login"><button className="border-[1px] bg-gray-700 rounded-full px-4 py-1.5">Login</button></Link>
                    <button className="border-[1px] bg-gray-700 rounded-full px-4 py-1.5">Signup</button>
                    <FaCartShopping className="text-2xl cursor-pointer"/>
                </div>
            </div>
        </div>
    )
}