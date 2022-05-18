import React from "react";

import { useState, useEffect } from "react";
import ProductDetails from "../components/ProductDetails"

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function getProducts() {
            const response = await fetch("http://localhost:8080/api/products").catch(err => console.log(err))
            const data = await response.json()
            setProducts(data)
     
        }

        getProducts()
    
    }, [])


    return (
        <div>
            <h1>Products</h1>
            {products.map(product => <ProductDetails
                id={product.id}
                name={product.name}
                price={product.price}
                description={product.description} />)}
            {/*<ProductDetails name="dupa"*/}
            {/*    id="0"*/}
            {/*    price="30"*/}
            {/*    description="Kuba to len" />*/}

        </div>

    )
}

export default Products;