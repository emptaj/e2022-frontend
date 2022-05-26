import React from "react";

import { useState, useEffect } from "react";
import ProductDetails from "../components/ProductDetails"
import { Pagination, Paper, Grid } from "@mui/material";

const Products = () => {
    const [products, setProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setPageCount] = useState(1);

    const pageSize = 9;
    const API_LINK = 'http://localhost:8080/api/products'

    async function getProducts() {
        const response = await fetch(`${API_LINK}?page=${currentPage - 1}&size=${pageSize}`).
            catch(err => console.log(err));
        const data = await response.json();
        return data;
    }

    useEffect(() => {
        getProducts().then(response => setProducts(response.items));
    }, [currentPage])

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response.items)
            setPageCount(response.pageCount)
        });
    }, [])



    return (
        <div>
            <h1>Products</h1>
            <Paper>
                <Grid container spacing={1}>
                    {products && products.map(product => <ProductDetails
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        description={product.description} />)}
                </Grid>
                <Pagination count={pageCount} onChange={(event) => setCurrentPage(event.target.textContent)} color="primary" />
            </Paper>

        </div>

    )
}

export default Products;