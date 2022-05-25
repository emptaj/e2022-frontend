import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GridItem from "@material-ui/core/Grid";
const ProductDetails = ({ id, name, description, price }) => {

    return (
        <GridItem>
            <Card sx={{ width: "20rem", mx: "1rem", my: "2rem" }}>
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
        </GridItem>

    )
}

export default ProductDetails;