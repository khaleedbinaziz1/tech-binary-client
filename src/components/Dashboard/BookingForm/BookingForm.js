import React from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../Sidebar/Sidebar";
import './BookingForm.css'

const BookingForm = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {

        fetch('https://peaceful-hamlet-50331.herokuapp.com/addBooking', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            if(success){
                alert('Booking Created successfully')
            }
        })
        
       
    }

    return (
        <div className="container-fluid row" >
            <div className="col-md-3">
                <Sidebar />
            </div>
            <div style={{ backgroundColor: '#e9e1ef', borderRadius: '5px', right: '0' }} className="col-md-7 text-center pt-5 mt-5">
                <h1></h1>
                <form className="text-left" onSubmit={handleSubmit(onSubmit)}>
                    <small>Select A Service</small>
                    <select className="form-input" {...register("service")}>
                        <option value="Web Development">Web Development</option>
                        <option value="Mobile Development">Mobile Development</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="QA And Testing">QA And Testing</option>
                        <option value="IT Counsultancy">IT Counsultancy</option>
                        <option value="Dedicated Team">Dedicated Team</option>
                    </select>
                    <br />
                    <small>How Many Pages Do You Want?</small>
                    <input className="form-input" placeholder="Pages" required {...register("page")} />
                    <br />
                    <small>Name</small>
                    <input className="form-input" placeholder="Your Name" required {...register("name")} />
                    <br />
                    <small>Email</small>
                    <input className="form-input" placeholder="exampe@gmail.com" required {...register("email")} />
                    <br />
                    <small>Phone Number</small>
                    <input className="form-input" placeholder="Phone Number" required {...register("phone")} />
                    <br />
                    <input className="btn btn-primary submit-btn" type="submit" />
                </form>
            </div>
        </div>

    )
}

export default BookingForm
