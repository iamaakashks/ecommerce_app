import React from 'react'
import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com'

export const products = async()=>{
    const getProducts = await axios.get(`${BASE_URL}/products`)
    return getProducts.data
}