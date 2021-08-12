import React from 'react';
const Review = ({ review }) => {
    return (
        <div className="col-md-4 text-center">

            <div className="card justify-content-center" >
                {
                    review.image? <img src={`data:image/png;base64,${review.image.img}`} className="card-img-top " style={{ height: '60px', width: '60px', borderRadius: '50%', alignSelf: 'center' }} className="img-fluid m-3" alt="" />
                    :
                    <img className="card-img-top " style={{ height: '60px', width: '60px', borderRadius: '50%', alignSelf: 'center' }} className="img-fluid m-3" src={`https://peaceful-hamlet-50331.herokuapp.com/${review.img}`} />
                }
                <div className="card-body">
                    <h5 className="card-title">{review.name}</h5>
                    <small>Company:{review.company}</small>
                    <p className="card-text">Review: {review.testimonial}</p>
                </div>
            </div>

        </div>
    );
};

export default Review;