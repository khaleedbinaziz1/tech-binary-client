import React from 'react'
import Footer from '../../Shared/Footer/Footer'
import Navigationbar from '../../Shared/Navigationbar/Navigationbar'
import BookService from '../BookService/BookService'

const Booking = () => {
    return (
        <div>
            <Navigationbar />
            <BookService />
            <Footer />
        </div>
    )
}

export default Booking
