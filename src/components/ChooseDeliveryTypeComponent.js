import { Card, CardContent, Typography } from "@mui/material";
import GridItem from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { API_LINK_ADDRESS_ID } from "../constants/API_LINKS";
import refreshToken from "../constants/RefreshToken";

async function getAddress(link) {
    let data;
    const response = await fetch(link, {
        headers: {
            'Authorization': localStorage.getItem('access_token')
        }
    }).catch(err => console.log(err));

    if(response.status === 401) {
        Navigate('/login');
    }

    data = await response.json();

    if(response.status === 403 && data.error_message.includes("The Token has expired")){
        data = await refreshToken(getAddress, link);
    }

    return data;
}

export default function ChooseDeliveryTypeComponent( {id, name, email, addressId, setCartItems} ) {
    const delieveryType = {
        id: id,
        name: name
    }

    const API_ADDRESS_LINK = API_LINK_ADDRESS_ID(addressId);
    const [address, setAddress] = useState({});

    useEffect(() => {
        getAddress(API_ADDRESS_LINK).then(dataAddress => setAddress(dataAddress));
    },[])


    return(
        <GridItem md={4} xs={12}>
            <Card onClick={() => setCartItems(delieveryType)}>
                <CardContent>
                    <Typography gutterBottom>
                      {email}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography>
                        {address.city}
                    </Typography>
                </CardContent>
            </Card>
        </GridItem >
    )
}