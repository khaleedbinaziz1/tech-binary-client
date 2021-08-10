import React from 'react'
import Sidebar from '../Sidebar/Sidebar'

const OrderList = (order) => {
    return (
        <div className="container-fluid row" >
            <div className="col-md-3">
                <Sidebar />
            </div>
            <div style={{ backgroundColor: '#e9e1ef', borderRadius: '5px', right: '0' }} className="col-md-7 text-left pt-5 mt-5">
                <h5>{order.email}</h5>
            </div>
        </div>
    )
}

export default OrderList
