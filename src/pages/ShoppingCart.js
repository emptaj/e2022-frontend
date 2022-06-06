import React from "react";
import ProductDetails from "../components/ProductDetails";

export default function ShoppingCart({cartItems, setCartItems}) {

    return (
        <div>
            <h1> Shopping cart </h1>
            {cartItems && cartItems.map(product =><div> <ProductDetails { ...JSON.parse(product.item) } setCartItems={setCartItems} addOrDelete={false} /> {product.quantity} </div> )}
        </div>
    )
}
