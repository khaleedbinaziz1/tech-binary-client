import React from 'react'
import Header from '../Header/Header'
import BusinessInfo from './../BusinessInfo/BusinessInfo';
import Services from './../Services/Services';
import Contact from './../Contact/Contact';
import Footer from './../../Shared/Footer/Footer';
import Reviews from './../Reviews/Reviews';


const Home = () => {
    return (
        <div>
            <Header />
            <BusinessInfo />
            <Services />
            <Reviews />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home
