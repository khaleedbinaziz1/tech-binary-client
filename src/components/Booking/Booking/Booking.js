import React from 'react'
import Footer from '../../Shared/Footer/Footer'
import Navbar from '../../Shared/Navbar/Navbar'
import BookService from '../BookService/BookService'

const Booking = () => {
    return (
        <div>
            <Navbar />
            <BookService />
            <Footer />
        </div>
    )
}

export default Booking
