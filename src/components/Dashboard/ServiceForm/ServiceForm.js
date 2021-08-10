import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'

const ServiceForm = () => {
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
        formData.append('details', info.details);
    

        fetch('https://peaceful-hamlet-50331.herokuapp.com/addServices', {
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
            <div style={{ backgroundColor: '#e9e1ef', borderRadius: '5px', right: '0' }} className="col-md-7 text-left pt-5 mt-5">
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <small> Service Name</small>
                        <input onBlur={handleBlur} type="text" class="form-control" placeholder="Enter Your Name" name="name"></input>
                    </div>
                    
                    <div class="form-group">
                        <small>Service Details</small>
                        <textarea onBlur={handleBlur} name="details" className="form-control" id="" cols="10" rows="4" placeholder="Give Us A Review"></textarea>
                    </div>
                    <div class="form-group">
                        <small>Put A Service Logo</small>
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
export default ServiceForm
