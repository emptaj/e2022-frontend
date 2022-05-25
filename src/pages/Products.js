import React from "react";

import { useState, useEffect } from "react";
import ProductDetails from "../components/ProductDetails"
import Grid from "@material-ui/core/Grid";
import { Pagination, Paper, Typography } from "@mui/material";

const Products = () => {
    const [products, setProducts] = useState([])
    const [productsSlice, setProductsSlice] = useState([]);

    const pageSize = 9;
    const pageCount = Math.ceil(products.length / pageSize);

    let currentPage = 0;

    useEffect(() => {
        async function getProducts() {
            const response = await fetch("http://localhost:8080/api/products").catch(err => console.log(err));
            const data = await response.json();
            setProducts(data);
            setProductsSlice(data.slice(0, pageSize))
        }

        getProducts();
    }, [])

    const changeProductsPage = (event, value) => {
        currentPage = value;
        setProductsSlice(products.slice((currentPage-1)*pageSize, currentPage*pageSize));
    };

    return (
        <div>
            <h1>Products</h1>
            <Paper>
                <Grid container spacing={1}>
                    {productsSlice.map(product => <ProductDetails
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        description={product.description} />)}
                </Grid>
                <Pagination count={pageCount} onChange={changeProductsPage} color="primary" />
            </Paper>

        </div>

    )
}

export default Products;