import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from '../components/Cards';

const BASE_URL = 'https://fakestoreapi.com';
export const Products = ()=>{
    return (
        <div className='w-full h-screen px-20 py-10'>
            {/* {
                productList.map((item, index)=>{
                    return <img key={index} src={item.image} alt="" />
                })
            } */}
            <Cards />

        </div>
    )
}