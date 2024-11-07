import React from 'react';
import './Home.css';
import Carousel from '../../Components/MyCarousel/MyCarousel';
import Footer from '../../Components/Footer/Footer';
import Hero from '../../Components/Hero/hero'
import About from '../../Components/About/about';
import Favourite from '../../Components/Favourite/favourite'

function Home() {
    return (
        <div className='Homepage'>
            <Carousel />
            <Hero />
            <Favourite />
            <About />
            <Footer />
        </div>
    )
}

export default Home;