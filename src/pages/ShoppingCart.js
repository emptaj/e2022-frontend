import React from "react";
import ProductDetails from "../components/ProductDetails";

export default function ShoppingCart({cartItems, setCartItems}) {

    console.log(cartItems);
    let cartMap = new Map();
    cartItems.forEach(item => {
        // const itemStringified = JSON.stringify(item);
        if(cartMap.has(item)) 
            cartMap.set(item, cartMap.get(item) + 1);
        else
            cartMap.set(item, 1);
        console.log(item);
    })

    

    let items = []

    for(const [itemStr, quantity] of cartMap.entries()){
        const item = JSON.parse(itemStr)
        items.push(<div> <ProductDetails {...item } setCartItems={setCartItems} addOrDelete={false}/>  {quantity} </div>)
     }


    return (
        <div>
            <h1> Shopping cart </h1>
            {items}
        </div>
    )
}
