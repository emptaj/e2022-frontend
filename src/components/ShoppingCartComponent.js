import { List, ListItem } from "@mui/material";
import React from "react";
import ProductDetails from "./ProductDetails";

export default function ShoppingCartComponent({ cartItems, setCartItems }) { 

    return (
        <List>
        {
            cartItems && cartItems.map(product =>
            <ListItem>
                <ProductDetails { ...JSON.parse(product.item) } setCartItems={setCartItems} addOrDelete={false} /> 
                {product.quantity} 
            </ListItem>)
        }
        </List>
    )
}
