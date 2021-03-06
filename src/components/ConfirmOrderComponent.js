import { Alert, Button } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { STATIC_LINKS } from '../constants/API_LINKS';
import refreshToken from '../constants/RefreshToken';

export default function ConfirmOrderComponent ({ cartItems, setCartItems, address, setAddress, deliveryType, setDeliveryType, setIsModalShown, payuRedirectURL }) {
    const [errorMsg, setErrorMsg] = useState({});
    const orderDetails = [];
    const navigate = useNavigate();

    cartItems.forEach(cartItem => orderDetails.push({
        productId: JSON.parse(cartItem.item).id,
        quantity: cartItem.quantity
    }))

    async function createOrder () {
        let response, data;
        response = await fetch(STATIC_LINKS.CREATE_ORDER, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('access_token')
            },
            body: JSON.stringify({
                address: address,
                deliveryTypeId: deliveryType.id,
                orderDetails: orderDetails
            })
        }).catch(err => console.log(err));


        data = await response.json();

        if (response.status >= 400) {

            if (response.status === 401) {
                navigate('/login');
            }

            else if (response.status === 403 && data.error_message.includes("The Token has expired")) {
                response = await refreshToken(createOrder, null);
            }

            else {
                setErrorMsg({
                    message: data.message,
                    deliveryTypeId: data.deliveryTypeId,
                    orderDetails: data.orderDetails
                });
                Object.keys(data).forEach((error) => {
                    setErrorMsg((prevErrors) => {
                        return {
                            ...prevErrors,
                            [error.split('.')[1]]: data[error]
                        }
                    });
                })
            };

        }

        else {
            data.forEach(miniOrder => window.open(miniOrder.payuRedirectURL));
        }

        return response;
    }

    const onSubmitButtonClick = () => {
        createOrder().then(response => {
            if (response.status !== 201)
                return;

            setCartItems([]);
            setAddress({});
            setDeliveryType({});
            setIsModalShown(true);
            //RZAL I BUL
        });
    }

    const redirectToOldPayment = () => {
        window.open(payuRedirectURL, '_blank');
    }

    return (
        <div>
            <Button
                type="submit"
                variant="contained"
                onClick={payuRedirectURL? redirectToOldPayment : onSubmitButtonClick}
                sx={{ mt: 3, mb: 2 }}
            >
                {payuRedirectURL ? 'Check payment' : 'Confirm your order'  }
            </Button>
            {errorMsg.message && <Alert severity="error">
                {errorMsg.message}
            </Alert>}
            {errorMsg.deliveryTypeId && <Alert severity="error">
                {errorMsg.deliveryTypeId}
            </Alert>}
            {errorMsg.orderDetails && <Alert severity="error">
                {errorMsg.orderDetails}
            </Alert>}

            {errorMsg.country && <Alert severity="error">
                {errorMsg.country}
            </Alert>}
            {errorMsg.city && <Alert severity="error">
                {errorMsg.city}
            </Alert>}
            {errorMsg.postalCode && <Alert severity="error">
                {errorMsg.postalCode}
            </Alert>}
            {errorMsg.street && <Alert severity="error">
                {errorMsg.street}
            </Alert>}
            {errorMsg.houseNum && <Alert severity="error">
                {errorMsg.houseNum}
            </Alert>}
            {errorMsg.flatNum && <Alert severity="error">
                {errorMsg.flatNum}
            </Alert>}
            {errorMsg.phone && <Alert severity="error">
                {errorMsg.phone}
            </Alert>}

        </div>
    )
}