import React from 'react'
import {Navbar} from './components/Navbar'
import { Route, Routes } from 'react-router-dom';
import {Home} from './pages/Home.jsx'
import {Products} from './pages/Products.jsx'
import {Cart} from './pages/Cart.jsx'
import {Category} from './pages/Category.jsx'

const App = ()=>{
  return (
    <div className='w-full h-screen bg-zinc-600 m-auto'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/api/products' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/category' element={<Category />} />
      </Routes>
    </div>
  )
}
export default App;