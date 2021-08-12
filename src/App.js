import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Booking from "./components/Booking/Booking/Booking";
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Home from "./components/Home/Home/Home"
import BookingForm from './components/Dashboard/BookingForm/BookingForm';
import ReviewForm from './components/Dashboard/Review/ReviewFrom';
import ServiceForm from './components/Dashboard/ServiceForm/ServiceForm';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/booking">
            <Booking />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/bookingForm">
            <BookingForm />
          </PrivateRoute>
          <PrivateRoute path="/review">
            <ReviewForm />
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <ServiceForm />
          </PrivateRoute>
          <PrivateRoute path="/addAdmin">
            <MakeAdmin />
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>

  );
}

export default App;
