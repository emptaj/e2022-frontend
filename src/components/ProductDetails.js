import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GridItem from "@mui/material/Grid";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

const ProductDetails = ({ id, name, description, price, setCartItems, addOrDelete }) => {

    const cardStyle = {
        display: "block",
        margin: "10px",
        minWidth: "200px",
    };

    const item = {
        id: id,
        name: name,
        description: description,
        price: price
    }

    function addToCart() {
        setCartItems(listOfItems => {
            return [...listOfItems, JSON.stringify(item)];
        })
    }
    
    function removeFromCart() {
        setCartItems(listOfItems => {
            const index = listOfItems.indexOf(JSON.stringify(item));
            console.log(index)
            if(index !== -1)
                listOfItems.splice(index, 1);
            console.log(listOfItems)
            return [...listOfItems];
        })
    }

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
                    <Button size="small" onClick={addOrDelete? addToCart : removeFromCart}> 
                        {addOrDelete? <AddShoppingCartIcon color="success" /> : <RemoveShoppingCartIcon color="error" />}
                    </Button>
                </CardActions>
            </Card>
        </GridItem >


    )
}

export default ProductDetails;