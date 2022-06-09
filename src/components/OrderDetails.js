import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardContent, Typography } from '@mui/material';
import GridItem from "@mui/material/Grid";
import CardActions from '@mui/material/CardActions';
import { API_LINK_ADDRESS_ID } from '../constants/API_LINKS';
import { DETAIL_CARD_STYLE } from '../constants/Styles';
import refreshToken from '../constants/RefreshToken';


export default function OrderDetails( { id, addressId, state } ) {
    const API_LINK= API_LINK_ADDRESS_ID(addressId);
    const [address, setAddress] = useState({});

    const cardStyle = DETAIL_CARD_STYLE;

    async function getAddress() {
        const response = await fetch(API_LINK, {
            headers: {
                'Authorization': localStorage.getItem('access_token')
            }
            }).catch(err => console.log(err));


        if(response.status === 401 && data.error_message.includes("The Token has expired"))
            refreshToken(getAddress, null)


        const data = await response.json();
        return data;
    }

    // useEffect(() => getAddress(), [])

    getAddress().then(data => setAddress(data));

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