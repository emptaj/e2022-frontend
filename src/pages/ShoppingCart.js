import { Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import ChooseDelieveryTypeComponent from "../components/ChooseDelieveryTypeComponent";
import CreateAddressComponent from "../components/CreateAddressComponent";
import ShoppingCartComponent from "../components/ShoppingCartComponent";
import WithListHOC from "../components/WithListHOC";
import { STATIC_LINKS } from "../constants/API_LINKS";

const emptyAddress = {
    country: "",
    city: "",
    postalCode: "",
    street: "",
    houseNum: "",
    flatNum: "",
    phone: "",
}

export default function ShoppingCart({cartItems, setCartItems}) {
    const [tableValue, setTableValue] = useState(0);
    const [deliveryTypeId, setDelieveryTypeId] = useState(0);
    const [address, setAddress] = useState({});

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
                    scrollButtons={false}
                    aria-label="scrollable prevent tabs example"
                >
                    <Tab label="1. Cart content" />
                    <Tab label="2. Delievery type" />
                    <Tab label="3. Address" />
                    <Tab label="4. Confirm" />
                </Tabs>
            </Box>
            {(() => {
                switch (tableValue+1) {
                    case 1: 
                        return <ShoppingCartComponent cartItems={cartItems} setCartItems={setCartItems}/>;
                    case 2:
                        return (
                            <div> 
                                <h1>Chosen delievery id: {deliveryTypeId? deliveryTypeId : 'None'}</h1> <WithListHOC WrappedComponent={ChooseDelieveryTypeComponent} API_LINK={STATIC_LINKS.DELIEVERY_TYPES} setCartItems={setDelieveryTypeId} /> 
                            </ div>
                        )
                    case 3: 
                        return <CreateAddressComponent address={address} setAddress={setAddress} />
                }
            })()}
        </div>
    );
}
