import { Button } from "@mui/material";
import React from "react";
import { STATIC_LINKS } from "../constants/API_LINKS";

const mockupAddress = {
    country: "Polska",
    city: "Lublin",
    postalCode: "21-010",
    street: "Zielona",
    houseNum: "24",
    flatNum: "6a",
    phone: "619407571"
};
const mockupDelieveryId = 29;

export default function ShoppingCartComponent({ cartItems }) {
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
                    address: mockupAddress,
                    deliveryTypeId: mockupDelieveryId,
                    orderDetails: orderDetails
                    })
        }).catch(err => console.log(err));


        const data = await response.json();
        
    }

    const onSubmitButtonClick = () => {
        createOrder();
    }

    return (
    <Button
        type="submit"
        variant="contained"
        onClick={ onSubmitButtonClick }
        sx={{ mt: 3, mb: 2 }}
    >
        Confirm your order
    </Button>
    )
}
