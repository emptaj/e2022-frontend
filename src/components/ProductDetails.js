import React from "react";

const ProductDetails = ({ id, name, description, price }) => {

    return (
        <div>
            <h1>Product</h1>
            <h3>id: { id } </h3>
            <h3>name: { name } </h3>
            <h3>description: { description } </h3>
            <h3>price: { price } </h3>
        </div>

    )
}

export default ProductDetails;