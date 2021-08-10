import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const BookingCard = ({booking}) => {
    return (
        <div className="col-md-4 mb-5 ">
            <div style={{borderRadius: '5px',backgroundColor: '#d3d6ea'}} className="card p-3 mt-3">
                <div className="card-body text-center">
                  <img style={{width: '240px', height:'180px',borderRadius: '5px'}} src={booking.image} alt="" />
                    <h5 className="card-title text-brand">{booking.subject}</h5>
                    <h6>{booking.price}</h6>
                    <Link to="/bookingForm" className="btn btn-primary text-uppercase">Book Now</Link>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;