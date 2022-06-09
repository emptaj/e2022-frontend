import React from 'react';
import OrderDetails from '../components/OrderDetails';
import WithListHOC from '../components/WithListHOC';
import { API_LINK_USERS_ORDERS } from '../constants/API_LINKS';

export default function UsersOrders() {
    const API_LINK = API_LINK_USERS_ORDERS(localStorage.getItem('user_id')); // MOCKUPID

    return( 
        <WithListHOC WrappedComponent={OrderDetails} API_LINK={API_LINK}/>
    )
}