import React from 'react'
import {Navbar} from './components/Navbar'
import { Route, Routes } from 'react-router-dom';
import {Home} from './pages/Home.jsx'
import {Products} from './pages/Products.jsx'
import {Cart} from './pages/Cart.jsx'
import {Category} from './pages/Category.jsx'
import {Login} from './pages/Login.jsx'
import { MainLayout } from './layouts/MainLayout.jsx';
import Footer from './components/Footer.jsx'
import {About} from './components/About.jsx'
import Contact from './components/Contact.jsx'

const App = ()=>{
  return (
    <>
    <div className='w-full h-screen m-auto'>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/api/products' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/category/:categoryName' element={<Category />} />
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Route>
          <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </div>
    </>
  )
}
export default App;