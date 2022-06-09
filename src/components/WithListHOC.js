import React from "react";
import { useState, useEffect } from "react";

import { Grid } from "@mui/material";

import PaginationComponent from "./PaginationComponent";
import { useParams } from "react-router-dom";
import refreshToken from "../constants/RefreshToken";

export default function WithListHOC({ WrappedComponent, API_LINK, pageTitle, pageSize, setCartItems }) {
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setPageCount] = useState(1);
    const [blockSetItemsEffect, setBlockSetItemsEffect] = useState(false);
    const warehouseId = useParams().warehouseId;
    API_LINK = warehouseId ? API_LINK(warehouseId) : API_LINK;

    async function getItems() {
        let response, data;
        response = await fetch(`${API_LINK}?page=${currentPage - 1}&size=${pageSize}`, {
            headers: {
                'Authorization': localStorage.getItem('access_token')
            }
        }).catch(err => console.log(err));

        data = await response.json();

        if(response.status === 403 && data.error_message.includes("The Token has expired")){
            data = await refreshToken(getItems, null);
        }
        
        return data;
    }

    useEffect(() => {
        if(!blockSetItemsEffect){
            setBlockSetItemsEffect(true);
            return;
        }
        getItems().then(response => setItems(response.items));
    }, [currentPage])

    useEffect(() => {
        getItems().then(response => {
            setPageCount(response.pageCount);
            setItems(response.items);
        });
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