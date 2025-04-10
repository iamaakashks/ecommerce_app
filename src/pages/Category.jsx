import React, { useEffect, useState } from 'react'
import { products } from '../api/product';
import { useParams } from 'react-router-dom';
import Card from '../components/Card.jsx'
import { useNavigate } from 'react-router-dom';

export const Category = ()=>{
    const {categoryName} = useParams();
    const navigate = useNavigate();
    const home = ()=>{
        if(categoryName.toLowerCase() === 'category'){
            navigate('/');
        }
    }
    home();
    const [productList, setProductList] = useState([]);
    const [filtered, setFiltered] = useState([]);
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
    useEffect(()=>{
        const formattedCategoryName = categoryName.toLocaleLowerCase();
        let filteredData = [];

        if(formattedCategoryName === 'kids'){
            filteredData = productList.filter(
                (item)=>
                    item.category.toLowerCase() !== "women's clothing" &&
                    item.category.toLowerCase() !== "men's clothing"
            )
        }else{
            filteredData = productList.filter(
                (item)=> item.category.toLowerCase() === `${formattedCategoryName}'s clothing`
            )
        }
        setFiltered(filteredData);
    }, [categoryName, productList])
    console.log(filtered);
    return (
        <div className='w-full px-20 py-10 '>
            <div className='flex gap-4 flex-wrap'>
                {
                    filtered.map(
                        (items, index)=>
                            <Card key={index} item={items} />
                    )
                }
            </div>
        </div>
    )
}