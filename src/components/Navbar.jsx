import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
export const Navbar = ()=>{
    const [clicked, setClicked] = useState('')
    const navItems = ['Home', 'Men', 'Women', 'Kids']
    return (
        <div className="h-[10%] text-white">
            <div className="flex items-center h-full px-10 bg-red-500">
                <ul className="flex w-[70%] gap-28 justify-center">
                    {navItems.map((items)=>{
                        return <li onClick={()=>setClicked(`${items}`)} className={`${clicked === items ? 'underline underline-offset-4 font-bold' : 'hover:underline-offset-4 hover:underline'} cursor-pointer`} key={items}>{items}</li>
                    })}
                </ul>
                <div className="flex items-center w-[30%] justify-end gap-6">
                    <button className="border-[1px] bg-gray-700 rounded-full px-4 py-1.5">Login</button>
                    <button className="border-[1px] bg-gray-700 rounded-full px-4 py-1.5">Signup</button>
                    <FaCartShopping className="text-2xl cursor-pointer"/>
                </div>
            </div>
        </div>
    )
}