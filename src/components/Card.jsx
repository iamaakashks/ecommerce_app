import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext.jsx"

export default function Card({item}){
    const priceInRs = (item.price*86.22).toFixed(2);
    const [buttonText, setButtonText] = useState('Add');
    const {addToCart, removeFromCart} = useContext(CartContext)
    const [numberOfItems, setNumberOfItems] = useState(0);

    const handleAdd = ()=>{
        setButtonText("Added")
        addToCart();
    }
    useEffect(()=>{
        if(numberOfItems == 0){
            setButtonText("Add");
        }
    }, [numberOfItems])
    const handleRemove = ()=>{
        setNumberOfItems(prev => (prev > 0? prev-1: 0))
        if(numberOfItems>0) removeFromCart();
    }
    const handleNumberOfItems = ()=>{
        setNumberOfItems(prev => prev+1)
    }
    const handleAddClick = ()=>{
        handleAdd(),
        handleNumberOfItems()
    }
    
    return (
        <div className=" w-64 mx-auto bg-white border border-gray-300 rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            
            <div className="w-full h-64 bg-white flex items-center justify-center p-4">
                <img
                    className="max-h-full object-contain"
                    src={item.image}
                    alt={item.title}
                />
            </div>

            <div className="p-4 bg-white">
                <h1 className="text-base font-semibold mb-2">{item.title}</h1>
                <p className="text-sm text-gray-800 font-medium mb-2">₹ {priceInRs}</p>
                <div className="flex justify-between">
                    <button value={buttonText} onClick={handleAddClick} className={`px-3 py-1.5 bg-black text-white rounded-md`}>{buttonText}</button>
                    <div className={`${numberOfItems > 0 ? '':"hidden"} flex gap-4 bg-black text-white rounded-md`}>
                        <button onClick={handleRemove} className="border-r-[1px] px-2 py-1.5">-</button>
                        <button className="">{numberOfItems}</button>
                        <button onClick={handleAddClick} className="border-l-[1px] px-2">+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}