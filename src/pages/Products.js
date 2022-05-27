import React from "react";

import { useState, useEffect } from "react";
import ProductDetails from "../components/ProductDetails"
import {
    Pagination,
    Grid,

} from "@mui/material";

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
            <Grid container spacing={1}
                direction="column"
                alignItems="center"
                justifyContent="center"
            >
                <Grid item>
                    <Grid container
                        spacing={1}
                        alignItems="center"
                        justifyContent="center"
                        direction="row">

                        {products && products.map(product => <ProductDetails
                            id={product.id}
                            name={product.name}
                            price={product.price}
                            description={product.description} />)}
                    </Grid >
                </Grid>
                <Grid item>
                    <Pagination count={pageCount} onChange={(event, value) => {
                        setCurrentPage(value)
                    }} color="primary" />
                </Grid>
            </Grid>

        </div >

    )
}

export default Products;