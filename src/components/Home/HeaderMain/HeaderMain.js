import React from 'react';
import banner from '../../../images/banner.jpg';
import { Link } from 'react-router-dom';
import './HeaderMain.css'

const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center ">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: '#fff'}}>We Provide Best IT Services for Your Need</h1>
                <p className="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
                <Link to="/booking" className="btn btn-primary">Book A services</Link>
            </div>
            <div className="col-md-6">
                <img src={banner} alt="" className="banner img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;