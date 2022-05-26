import React from "react";

import { useState, useEffect } from "react";
import ProductDetails from "../components/ProductDetails"
import Grid from "@material-ui/core/Grid";
import { Pagination, Paper } from "@mui/material";

const Products = () => {
    const [products, setProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setPageCount] = useState(1);
    const pageSize = 1;
    
    async function getProducts() {
        const response = await fetch(`http://localhost:8080/api/products?page=${currentPage-1}&size=${pageSize}`).catch(err => console.log(err));
        const data = await response.json();
        return data;
    }

    useEffect(() => {   
        getProducts().then(response => setProducts(response.products));
    }, [currentPage])

    useEffect(() => {   
        getProducts().then(response => setPageCount(response.pageCount));
    }, [])


    
    return (
        <div>
            <h1>Products</h1>
            <Paper>
                <Grid container spacing={1}>
                    {products.map(product => <ProductDetails
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