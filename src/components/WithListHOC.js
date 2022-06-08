import React from "react";
import { useState, useEffect } from "react";

import { Grid } from "@mui/material";

import PaginationComponent from "./PaginationComponent";
import { useParams } from "react-router-dom";

export default function WithListHOC({ WrappedComponent, API_LINK, pageTitle, pageSize, setCartItems }) {
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setPageCount] = useState(1);

    const warehouseId = useParams().warehouseId;
    API_LINK = warehouseId ? API_LINK(warehouseId) : API_LINK;

    async function getItems() {
        const response = await fetch(`${API_LINK}?page=${currentPage - 1}&size=${pageSize}`).
            catch(err => console.log(err));
        const data = await response.json();
        return data;
    }

    useEffect(() => {
        getItems().then(response => setItems(response.items));
    }, [currentPage])

    useEffect(() => {
        getItems().then(response => setPageCount(response.pageCount));
    }, [])

    return (
        <div>
            <h1>{pageTitle}</h1>
            <Grid container spacing={1}
                direction="column"
                alignItems="center"
                justifyContent="center"
            >

                <Grid item container
                    spacing={1}
                    alignItems="center"
                    justifyContent="left"
                    direction="row">

                    {items && items.map(item => <WrappedComponent {...item} setCartItems={setCartItems} addOrDelete={true} />)}
                </Grid >
                <Grid item>
                    <PaginationComponent setCurrentPage={setCurrentPage} pageCount={pageCount} />
                </Grid>
            </Grid>
        </div >
    );
}

WithListHOC.defaultProps = { pageSize: 9 }