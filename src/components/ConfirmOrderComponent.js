import { Alert, Button } from '@mui/material';
import React, { useState } from 'react';
import { STATIC_LINKS } from '../constants/API_LINKS';

export default function ConfirmOrderComponent( {cartItems, setCartItems, address, setAddress, deliveryTypeId, setDeliveryTypeId} ) {
    const [errorMsg, setErrorMsg] = useState({});
    const orderDetails = [];

    cartItems.forEach(cartItem => orderDetails.push({
        productId: JSON.parse(cartItem.item).id,
        quantity: cartItem.quantity
    }))

    async function createOrder() {
        const response = await fetch(STATIC_LINKS.CREATE_ORDER, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                    address: address,
                    deliveryTypeId: deliveryTypeId,
                    orderDetails: orderDetails
                    })
        }).catch(err => console.log(err));

        const data = await response.json();
        console.log(data)
        if(response.status !== 201)
            setErrorMsg({
                message: data.message,
                deliveryTypeId: data.deliveryTypeId,
                orderDetails: data.orderDetails
            })

        return response;
    }

    const onSubmitButtonClick = () => {
        createOrder().then(response => {
            if(response.status !== 201)
                return;

            setCartItems([]);
            setAddress({});
            setDeliveryTypeId(null);
        });
    }

    return(
        <div>
            <Button 
                type="submit"
                variant="contained"
                onClick={ onSubmitButtonClick }
                sx={{ mt: 3, mb: 2 }}
            >
                Confirm your order
            </Button>
            {errorMsg.message && <Alert severity="error">
                { errorMsg.message }
            </Alert>}
            {errorMsg.deliveryTypeId && <Alert severity="error">
                { errorMsg.deliveryTypeId }
            </Alert>}
            {errorMsg.orderDetails && <Alert severity="error">
                { errorMsg.orderDetails }
            </Alert>}
            
        </div>
    )
}