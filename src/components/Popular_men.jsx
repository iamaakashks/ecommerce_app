import React, { useEffect, useState } from 'react'
import { products } from '../api/product.js'
import Card from "./Card.jsx"

export default function Popular_men(){
    const [productList, setProductList] = useState([]);
    useEffect(()=>{
        const loadProducts = async ()=>{
            try{
                const getProducts = await products();
                console.log(getProducts)
                setProductList(getProducts);
            }catch(error){
                console.log(error.message)
            }
        }
        loadProducts();
    }, [])
    const menData = productList.filter(item => item.category.toLowerCase() === "men's clothing")
    console.log(menData)
    return (
        <div className='bg-gradient-to-b from-gray-300 to-white w-full p-5'>
            <h1 className='font-thin text-3xl mb-4'>Popular in Men</h1>
            <div className='w-full flex mb-4'>
                {
                    menData.map((item, index)=>{
                        return <Card key={index} item={item} />
                    })
                }
            </div>
            <button className='px-3 py-1.5 rounded-full border-[1px] border-black'>See All</button>
        </div>
    )
}