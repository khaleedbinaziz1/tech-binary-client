import React, { useEffect, useState } from 'react'
import OrderList from './../OrderList/OrderList';

const OrderLists = () => {
    const [orders, setOrders] = useState([])
    useEffect( () => {
        fetch('https://peaceful-hamlet-50331.herokuapp.com/bookings')
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])

    return (
          
                    <div >
                        {
                            orders.map(order =><OrderList key={order._id} order={order} />)
                        }

                    </div>
             
    )
}

export default OrderLists