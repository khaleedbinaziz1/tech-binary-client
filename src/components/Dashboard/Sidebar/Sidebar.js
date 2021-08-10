import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { UserContext } from './../../../App';
import { useEffect } from 'react';

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
    }, [])
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/bookingForm" className="text-white">
                        <span>Booking</span>
                    </Link>
                </li>
                <li>
                    <Link to="/Review" className="text-white" >
                        <span>Review</span>
                    </Link>
                </li>

                <li>
                    <Link to="/" className="text-white">
                        <span>Home</span>
                    </Link>
                </li>
                {isAdmin && <div className="">
                    <li>
                        <Link to="/addService" className="text-white">
                            <span>Add Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addAdmin" className="text-white">
                            <span>Make Admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/orderLists" className="text-white">
                            <span>Order Lists </span>
                        </Link>
                    </li>
                </div>}
            </ul>
            <div>
                <Link to="/" > <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;