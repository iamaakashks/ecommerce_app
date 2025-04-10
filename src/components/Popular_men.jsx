import React, { useEffect, useState } from 'react'
import { products } from '../api/product.js'
import Card from "./Card.jsx";
import {Link} from 'react-router-dom';

export default function Popular_men(){
    const [productList, setProductList] = useState([]);
    useEffect(()=>{
        const loadProducts = async ()=>{
            try{
                const getProducts = await products();
                setProductList(getProducts);
            }catch(error){
                console.log(error.message)
            }
        }
        loadProducts();
    }, [])
    const menData = productList.filter(item => item.category.toLowerCase() === "men's clothing")
    return (
        <div className='bg-gradient-to-b from-white to-gray-300 w-full p-5'>
            <h1 className='font-thin text-3xl mb-4'>Popular in Men</h1>
            <div className='w-full flex mb-10'>
                {
                    menData.map((item, index)=>{
                        return <Card key={index} item={item} />
                    })
                }
            </div>
            <Link to='/category/men' className='px-3 py-1.5 rounded-full border-[1px] border-black'>See All</Link>
        </div>
    )
}