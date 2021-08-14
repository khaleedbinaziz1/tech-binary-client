import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'

const ReviewForm = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null)

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile)
    }

    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('testimonial', info.testimonial);
        formData.append('phone', info.phone);
        formData.append('company', info.company);

    

        fetch('https://peaceful-hamlet-50331.herokuapp.com/addReview', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className="container-fluid row" >
            <div className="col-md-3">
                <Sidebar />
            </div>
            <div style={{ backgroundColor: '#e9e1ef', borderRadius: '5px', right: '0',  marginLeft:'60px' }} className="col-md-7 text-left pt-5 mt-5">
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <small>Name</small>
                        <input onBlur={handleBlur} type="text" class="form-control" placeholder="Enter Your Name" name="name"></input>
                    </div>
                    <div class="form-group">
                        <small>Company Name</small>
                        <input onBlur={handleBlur} type="text" class="form-control" placeholder="Company Name" name="company"></input>
                    </div>
                    <div class="form-group">
                        <small>Review Description</small>
                        <textarea onBlur={handleBlur} name="testimonial" className="form-control" id="" cols="10" rows="4" placeholder="Give Us A Review"></textarea>
                    </div>
                    <div class="form-group">
                        <small>Put A Profile Picture</small>
                        <br />
                        <input onChange={handleFileChange} type="file" class="form-control" ></input>
                        <br />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>

    )
}

export default ReviewForm
