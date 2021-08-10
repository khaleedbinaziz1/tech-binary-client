import React from 'react';
import { Link } from 'react-router-dom';
import logo  from '../../../images/logo.jpg'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light navbar-bg">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="logo">
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
                </div>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link mr-5 text-white" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5 text-white" to="">About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5 text-white" to="/booking">Tech Services</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5 text-white" href="#">Projects</a>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5 text-white" to="/dashboard">Dashboard</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;