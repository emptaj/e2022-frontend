import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_LINK_ADDRESS_ID, API_LINK_ORDER_ID, API_LINK_PRODUCT_ID } from "../constants/API_LINKS";
import refreshToken from "../constants/RefreshToken";
import ShoppingCart from "../pages/ShoppingCart";

const localStorageNames = {
    deliveryTypeId: "pastDeliveryTypeId",
    address: 'pastAddress'
}

async function getFromServer(link) {
    let response, data;
    response = await fetch(link, {
        headers: {
            'Authorization': localStorage.getItem('access_token')
        }
    }).catch(err => console.log(err));
    data = await response.json();

    if(response.status === 403 && data.error_message.includes("The Token has expired")){
        data = await refreshToken(getFromServer, link);
    }

    return data;
}

export default function LoadOldOrderComponent() {
    const [orderDetails, setOrderDetails] = useState([]);
    const API_ORDER_LINK = API_LINK_ORDER_ID(useParams().id);

    useEffect(() => {
        getFromServer(API_ORDER_LINK).then(dataOrder => {
            const API_ADDRESS_LINK = API_LINK_ADDRESS_ID(dataOrder.addressId);

            dataOrder.orderDetails.forEach(singleProduct => {
                const API_ITEM_LINK = API_LINK_PRODUCT_ID(singleProduct.productId);
                getFromServer(API_ITEM_LINK).then(item => {
                    const newDetail = {
                        item: JSON.stringify(item),
                        qunantity: singleProduct.qunantity
                    }
                    setOrderDetails(existingDetails => [...existingDetails, newDetail])
                });                
            });

            localStorage.setItem(localStorageNames.deliveryTypeId, dataOrder.deliveryTypeId);
            getFromServer(API_ADDRESS_LINK).then(dataAddress => {
                localStorage.setItem(localStorageNames.address, JSON.stringify(dataAddress));
            });
        });
    },[])

    return (
        <ShoppingCart cartItems={orderDetails} localStorageNames={localStorageNames} disableSubmtion={true}/>
    )
}