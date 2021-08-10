import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css'
const ServiceDetail = ({ service }) => {
    return (
        <div className="col-md-4 text-center">
            <Link className="booking-link" to ="/booking">
            <div className="service-card p-5">
                <img style={{ height: '50px' }} src={`data:image/png;base64,${service.image.img}`} alt="" />
                <h5 className="mt-3 mb-3">{service.name}</h5>
                <p>{service.details}</p>
            </div>
            </Link>
        </div>
    );
};

export default ServiceDetail;