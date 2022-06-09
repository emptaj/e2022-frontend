import { List, ListItem } from "@mui/material";
import React from "react";
import ProductDetails from "./ProductDetails";

export default function ShoppingCartComponent({ cartItems, setCartItems, disableSubmtion }) { 

    return (
        <List>
        {
            cartItems && cartItems.map(product =>
            <ListItem>
                <ProductDetails { ...JSON.parse(product.item) } setCartItems={setCartItems} addOrDelete={false} disableSubmtion={disableSubmtion} /> 
                {product.quantity} 
            </ListItem>)
        }
        </List>
    )
}
