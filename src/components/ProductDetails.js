import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GridItem from "@mui/material/Grid";

const ProductDetails = ({ id, name, description, price }) => {

    const cardStyle = {
        display: "block",
        margin: "10px",
        minWidth: "200px",
    };

    return (
        <GridItem md={4} xs={12}>
            <Card style={cardStyle}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {name}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {price}
                    </Typography>
                    <Typography variant="body2">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Jakiś link</Button>
                </CardActions>
            </Card>
        </GridItem >


    )
}

export default ProductDetails;