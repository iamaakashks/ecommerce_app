import React, { useEffect, useState } from 'react'
import Card from '../components/Card.jsx'
import { products } from "../api/product"

export default function Cards(){
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(()=>{
        const loadProducts = async ()=>{
            try{
                const getProducts = await products();
                setProductList(getProducts)
            }catch(error){
                setError(error.message);
            }finally{
                setLoading(false);
            }
        }
        loadProducts();
    }, [])
    return (
        <div className="w-full h-full flex flex-wrap gap-20">
            {
                productList.map((item, index)=>{
                    return <Card key={index} item={item} />
                })
            }
        </div>
    )
}