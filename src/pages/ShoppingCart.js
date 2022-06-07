import { Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import ChooseDelieveryTypeComponent from "../components/ChooseDelieveryTypeComponent";

import ShoppingCartComponent from "../components/ShoppingCartComponent";
import WithListHOC from "../components/WithListHOC";
import { STATIC_LINKS } from "../constants/API_LINKS";

export default function ShoppingCart({cartItems, setCartItems}) {
    const [tableValue, setTableValue] = useState(0);
    const [deliveryTypeId, setDelieveryTypeId] = useState(0);

    const handleTabChange = (event, newValue) => {
        setTableValue(newValue);
    };

    return (
        <div>
            <h1> Place your order </h1>
            <Box>
                <Tabs
                    value={tableValue}
                    onChange={handleTabChange}
                    variant="scrollable"
                    scrollButtons={false}
                    aria-label="scrollable prevent tabs example"
                >
                    <Tab label="Cart content" />
                    <Tab label="Delievery type" />
                    <Tab label="Address" />
                    <Tab label="Confirm" />
                </Tabs>
            </Box>
            {(() => {
                switch (tableValue) {
                    case 0: 
                        return <ShoppingCartComponent cartItems={cartItems} setCartItems={setCartItems}/>;
                    case 1:
                        return (
                            <div> 
                                <h1>Chosen delievery id: {deliveryTypeId? deliveryTypeId : 'None'}</h1> <WithListHOC WrappedComponent={ChooseDelieveryTypeComponent} API_LINK={STATIC_LINKS.DELIEVERY_TYPES} setCartItems={setDelieveryTypeId} /> 
                            </ div>
                        )
                }
            })()}
            {/* <ShoppingCartComponent cartItems={cartItems} setCartItems={setCartItems}/> */}
            {/* <WithListHOC WrappedComponent={ChooseDelieveryTypeComponent} API_LINK={STATIC_LINKS.DELIEVERY_TYPES} /> */}
        </div>
    );
}
