import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect( () => {
        fetch('https://peaceful-hamlet-50331.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])

    return (
        <section className="reviews mt-5 pt-5">
            <div className="container">
                <h5 className="text-center  text-primary mb-5">Our reviews</h5>
                <div className="row">
                    {
                     reviews.map(review =><Review key={review._id} review={review} />)
                    }
                    
                </div>
            </div>
        </section>
    );
};

export default Reviews;