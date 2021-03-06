import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Card, CardContent, Typography } from '@mui/material';
import GridItem from "@mui/material/Grid";
import CardActions from '@mui/material/CardActions';
import { API_LINK_ADDRESS_ID, API_LINK_REFRESH_ORDER_STATUS } from '../constants/API_LINKS';
import { DETAIL_CARD_STYLE } from '../constants/Styles';
import refreshToken from '../constants/RefreshToken';


export default function OrderDetails ({ id, addressId, state, payuRedirectURL }) {
    const API_LINK = API_LINK_ADDRESS_ID(addressId);
    const [address, setAddress] = useState({});
    const navigate = useNavigate();

    const cardStyle = DETAIL_CARD_STYLE;

    async function getAddress () {
        let response, data;
        response = await fetch(API_LINK, {
            headers: {
                'Authorization': localStorage.getItem('access_token')
            }
        }).catch(err => console.log(err));

        if (response.status === 401) {
            navigate('/login');
        }

        data = await response.json();

        if (response.status === 403 && data.error_message.includes("The Token has expired")) {
            data = await refreshToken(getAddress, null);
        }


        return data;
    }

    async function refreshState () {
        const response = await fetch(API_LINK_REFRESH_ORDER_STATUS(id), {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('access_token')
            }
        }
        ).catch(err => console.log(err));
    }

    useEffect(() => {
        refreshState()
        getAddress().then(data => setAddress(data));
    }, [addressId])

    useEffect(() => {
        if(payuRedirectURL)
            localStorage.setItem('payuRedirectURL', payuRedirectURL);
    }, [])

    return (
        <GridItem md={4} xs={12}>
            <Card style={cardStyle}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="secondary" gutterBottom>
                        {state}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {address.city}
                    </Typography>
                    <Typography variant="body2">
                        {address.street} {address.houseNum}/{address.flatNum}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button component={Link} to={`/orders/${id}`} size="small">Check order</Button>
                </CardActions>
            </Card>
        </GridItem >


    )
}