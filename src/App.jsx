import React from 'react'
import {Navbar} from './components/Navbar'
import { Route, Routes } from 'react-router-dom';
import {Home} from './pages/Home.jsx'
import {Products} from './pages/Products.jsx'
import {Cart} from './pages/Cart.jsx'
import {Category} from './pages/Category.jsx'
import {Login} from './pages/Login.jsx'
import { MainLayout } from './layouts/MainLayout.jsx';

const App = ()=>{
  return (
    <>
    <div className='w-full h-screen bg-zinc-200 m-auto'>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/api/products' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/category/men' element={<Category />} />
          <Route path='/category/women' element={<Category />} />
          <Route path='/category/kids' element={<Category />} />
        </Route>
          <Route path='/login' element={<Login />} />
      </Routes>
    </div>
    </>
  )
}
export default App;