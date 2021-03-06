import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { CardMedia, CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GridItem from "@mui/material/Grid";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { DETAIL_CARD_STYLE } from "../constants/Styles";
import ProductImageModal from "./ProductImageModal";


const ProductDetails = ({ id, name, description, price, imageURL, setCartItems, addOrDelete, disableSubmtion }) => {

    const [isModalShown, setIsModalShown] = useState(false);
    const cardStyle = DETAIL_CARD_STYLE;

    const itemFromProps = {
        id: id,
        name: name,
        description: description,
        price: price,
        imageURL: imageURL
    }

    function addToCart() {
        setCartItems(listOfItems => {
            const itemStringified = JSON.stringify(itemFromProps);
            const index = listOfItems.findIndex((checkedItem) => checkedItem.item === itemStringified);

            if (index === -1)
                return [...listOfItems, { item: itemStringified, quantity: 1 }];

            listOfItems[index].quantity += 1;
            return [...listOfItems];
        })
    }

    function removeFromCart() {
        setCartItems(listOfItems => {
            const itemStringified = JSON.stringify(itemFromProps);
            const index = listOfItems.findIndex((checkedItem) => checkedItem.item === itemStringified);

            if (listOfItems[index].quantity === 1)
                listOfItems.splice(index, 1);
            else
                listOfItems[index].quantity -= 1;

            return [...listOfItems];
        })
    }

    return (
        <GridItem md={4} xs={12}>
            <Card style={cardStyle}>
                <CardActionArea>
                    <CardMedia
                        title={name}
                        image={imageURL}
                        component="img"
                        height="85"
                        onClick={() => setIsModalShown(true)}
                    />
                </CardActionArea>
                <CardContent>
                    <Typography variant="h6">
                        {name}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {price}
                    </Typography>
                    <Typography sx={{ fontSize: 12 }} color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    {disableSubmtion ? '' :
                        <Button size="small" onClick={addOrDelete ? addToCart : removeFromCart}>
                            {addOrDelete ? <AddShoppingCartIcon color="success" /> : <RemoveShoppingCartIcon color="error" />}
                        </Button>
                    }
                </CardActions>
            </Card>
            <ProductImageModal setIsModalShown={setIsModalShown} isModalShown={isModalShown} imageSource={imageURL}/>
        </GridItem >


    )
}

export default ProductDetails;