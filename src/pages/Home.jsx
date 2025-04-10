import React from 'react'
import Hero from '../components/Hero.jsx';
import Collections from '../components/Collections.jsx';
import Popular_men from '../components/Popular_men.jsx'
import Popular_women from '../components/Popular_women.jsx'
import Footer from '../components/Footer.jsx';

export const Home = ()=>{
    return (
        <div className="min-h-screen py-10 px-20">
            <Hero />
            <Collections />
            <Popular_men />
            <Popular_women />
        </div>
    )
}