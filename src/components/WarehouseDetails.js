import React from "react";
import { Link } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GridItem from "@mui/material/Grid";
import { DETAIL_CARD_STYLE } from "../constants/Styles";


const WarehouseDetails = ({ id, name, addressId, active }) => {

    const isActive = active? "Active" : "Inactive";

    const cardStyle = DETAIL_CARD_STYLE;

    return (
        <GridItem md={4} xs={12}>
            <Card style={cardStyle}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="secondary" gutterBottom>
                        {name}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {addressId}
                    </Typography>
                    <Typography variant="body2" color= {active? "success.main" : "error.main"}> 
                        {isActive}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button component={Link} to={`/warehouses/${id}/products`} size="small">Enter warehouse</Button>
                </CardActions>
            </Card>
        </GridItem >


    )
}

export default WarehouseDetails;