import React, { useEffect, useState } from 'react'
import { products } from '../api/product.js'
import Card from "../components/Card.jsx"

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
    const womenData = productList.filter(item => item.category.toLowerCase() === "women's clothing")
    const womenData4 = womenData.slice(0, 4);
    return (
        <div className='bg-gradient-to-b from-gray-300 to-white w-full p-5'>
            <h1 className='font-thin text-3xl mb-4'>Popular in Women</h1>
            <div className='w-full flex flex-wrap mb-4'>
                {
                    womenData4.map((item, index)=>{
                        return <Card key={index} item={item} />
                    })
                }
            </div>
            <button className='px-3 py-1.5 rounded-full border-[1px] border-black'>See All</button>
        </div>
    )
}