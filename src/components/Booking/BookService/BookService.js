import React from 'react';
import BookingCard from '../BookingCard/BookingCard';
import webDevelopment from '../../../images/webDevelopment.jpg'
import mobileApp from '../../../images/mobileApp.jpg'
import uiuxDesign from '../../../images/uiuxDesign.jpg'
import codeTesting from '../../../images/codeTesting.jpg'
import itCon from '../../../images/itCon.jpg'
import dedicatedTeam from '../../../images/dedicatedTeam.jpg'
import BookingForm from '../../Dashboard/BookingForm/BookingForm';

const bookingData = [
    {
        _id: '5e8df50be6e8231764dc23de',
        id: 1,
        subject: 'Web Development',
        price: '$100 - $2000',
        image: webDevelopment
    },
    {
        _id: '5e8df578e6e8231764dc23df',
        id: 2,
        subject: 'Mobile Development',
        price: '$200 - $2000',
        image: mobileApp

    },
    {
        _id: '5e8df5aee6e8231764dc23e0',
        id: 3,
        subject: 'UI/UX Design',
        price: '$100 - $300',
        image: uiuxDesign

    },
    {
        _id: '5e8df63be6e8231764dc23e1',
        id: 4,
        subject: 'QA & Testing',
        price: '$100 - $500',
        image: codeTesting

    },
    {
        _id: '5e8df68de6e8231764dc23e2',
        id: 5,
        subject: 'IT Counsultancy',
        price: '$100 - $500',
        image: itCon
    },
    {
        _id: '5e8df6a0e6e8231764dc23e3',
        id: 6,
        subject: 'Dedicated Team',
        price: '$100 - $2000',
        image: dedicatedTeam
    }
]
const BookService = ({date}) => {
    return (
        <section>
            <div className="row">
                {
                    bookingData.map(booking => <BookingCard booking={booking} date={date} key={booking.id}></BookingCard>)
                }
            </div>
        </section>
    );
};

export default BookService;