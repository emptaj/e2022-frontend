import { Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import AfterOrderModal from "../components/AfterOrderModal";
import ChooseDeliveryTypeComponent from "../components/ChooseDeliveryTypeComponent";
import ConfirmOrderComponent from "../components/ConfirmOrderComponent";
import CreateAddressComponent from "../components/CreateAddressComponent";
import ShoppingCartComponent from "../components/ShoppingCartComponent";
import WithListHOC from "../components/WithListHOC";
import { STATIC_LINKS } from "../constants/API_LINKS";

export default function ShoppingCart( {cartItems, setCartItems} ) {
    const [tableValue, setTableValue] = useState(0);
    const [deliveryTypeId, setDeliveryTypeId] = useState(parseInt(localStorage.getItem('deliveryTypeId')));
    const [address, setAddress] = useState(() => {
        const tempAddress = localStorage.getItem('address');
        return tempAddress? JSON.parse(tempAddress) : {};
    });
    const [isModalShown, setIsModalShown] = useState(false);

    const handleTabChange = (event, newValue) => {
        setTableValue(newValue);
    };

    useEffect(() => localStorage.setItem('deliveryTypeId', deliveryTypeId), 
    [deliveryTypeId])

    useEffect(() => localStorage.setItem('address', JSON.stringify(address)), 
    [address])

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
                    <Tab label="2. Delivery type" />
                    <Tab label="3. Address" />
                    <Tab label="4. Confirm" />
                </Tabs>
            </Box>
            {(() => {
                switch (tableValue+1) {
                    case 1: 
                        return <ShoppingCartComponent cartItems={cartItems} setCartItems={setCartItems} />;
                    case 2:
                        return (
                            <div> 
                                <h1>Chosen delivery id: {deliveryTypeId? deliveryTypeId : 'None'}</h1> 
                                <WithListHOC WrappedComponent={ChooseDeliveryTypeComponent} API_LINK={STATIC_LINKS.DELIVERY_TYPES} 
                                    setCartItems={setDeliveryTypeId} />
                            </ div>
                        )
                    case 3: 
                        return <CreateAddressComponent address={address} setAddress={setAddress} />;
                    case 4:
                        return <ConfirmOrderComponent cartItems={cartItems} setCartItems={setCartItems} address={address} 
                            deliveryTypeId={deliveryTypeId} setDeliveryTypeId={setDeliveryTypeId} setAddress={setAddress}
                            setIsModalShown={setIsModalShown} />;
                    default:
                        return {};
                }
            })()}
            <AfterOrderModal isModalShown={isModalShown} />
        </div>
    );
}
