import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './../../../App';
import { useEffect } from 'react';
import './Sidebar.scss'
import './main'
import logo from '../../../images/logo.jpg'











const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://peaceful-hamlet-50331.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, []);




    return (
        <div className="dot-body" id="body-pd">
        <div class="l-navbar" id="nav-bar">
            <nav class="nav">
                <div>
                    <div class="nav__list">
                        <Link to="/bookingForm" class="nav__link active">
                        <i class='bx bx-pen nav__icon' ></i>
                            <span class="nav__name">Booking</span>
                        </Link>
                         
                        <Link to="/review" class="nav__link">
                            <i class='bx bx-message-square-detail nav__icon' ></i>
                            <span class="nav__name">Review</span>
                        </Link>
                        <Link to="/" class="nav__link">
                            <i class='bx bx-home nav__icon' ></i>
                            <span class="nav__name">Home</span>
                        </Link>

                        {isAdmin &&   <div className="">
                       <Link to="/addService" class="nav__link">
                            <i class='bx bx-add-to-queue nav__icon' ></i>
                            <span class="nav__name">Add Service</span>
                        </Link>
                       

                        <Link to="/addAdmin" class="nav__link">
                            <i class='bx bx-user nav__icon' ></i>
                            <span class="nav__name">Add Admin</span>
                        </Link>
                       </div>}
                    </div>
                </div>

                <Link to="/" class="nav__link">
                    <i class='bx bx-log-out nav__icon' ></i>
                    <span class="nav__name">Log Out</span>
                </Link>
            </nav>
        </div>
    </div>
    );
};

export default Sidebar;