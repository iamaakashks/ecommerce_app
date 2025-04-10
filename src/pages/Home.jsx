import React from 'react'
import Hero from '../components/Hero.jsx';
import Collections from '../components/Collections.jsx'

export const Home = ()=>{
    return (
        <div className="min-h-screen py-10 px-20">
            <Hero />
            <Collections />
        </div>
    )
}