import React, { useEffect, useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import { Link } from 'react-router-dom';


const Services = () => {
    const [services, setServices] = useState([])
    useEffect( () => {
        fetch('https://peaceful-hamlet-50331.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 style={{ color: '#7141B1' }}>OUR SERVICES</h5>
                <h2>We Offer a Wide <br />
                    Variety of IT Services</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                        services.map(service => <ServiceDetail service={service} key={service._id}></ServiceDetail>)
                    }
                </div>
            </div>
            <div className="text-center mt-5"><Link to="/booking" className="btn btn-primary">Book A services</Link></div>
        </section>
    );
};

export default Services;