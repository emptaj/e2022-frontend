import { Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import ChooseDeliveryTypeComponent from "../components/ChooseDeliveryTypeComponent";
import ConfirmOrderComponent from "../components/ConfirmOrderComponent";
import CreateAddressComponent from "../components/CreateAddressComponent";
import ShoppingCartComponent from "../components/ShoppingCartComponent";
import ThankYouModal from "../components/ThankYouModal";
import WithListHOC from "../components/WithListHOC";
import { STATIC_LINKS } from "../constants/API_LINKS";

const modalMessage = {
    title: "Order submitted",
    body: "Your order has been accepted!",
    navigate: "/"
}

export default function ShoppingCart( {cartItems, setCartItems, localStorageNames, disableSubmtion} ) {
    const [tableValue, setTableValue] = useState(0);
    const [deliveryTypeId, setDeliveryTypeId] = useState(parseInt(localStorage.getItem(localStorageNames.deliveryTypeId)));
    const [address, setAddress] = useState(() => {
        const tempAddress = localStorage.getItem(localStorageNames.address);
        return tempAddress? JSON.parse(tempAddress) : {};
    });
    const [isModalShown, setIsModalShown] = useState(false);

    const handleTabChange = (event, newValue) => {
        setTableValue(newValue);
    };

    useEffect(() => localStorage.setItem(localStorageNames.deliveryTypeId, deliveryTypeId), 
    [deliveryTypeId])

    useEffect(() => localStorage.setItem(localStorageNames.address, JSON.stringify(address)), 
    [address])

    return (
        <div>
            <h1> {disableSubmtion? 'Your order' : 'Place your order'} </h1>
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
                    {disableSubmtion? '' : <Tab label="4. Confirm" />}
                </Tabs>
            </Box>
            {(() => {
                switch (tableValue+1) {
                    case 1: 
                        return <ShoppingCartComponent cartItems={cartItems} setCartItems={setCartItems} disableSubmtion={disableSubmtion}/>;
                    case 2:
                        return (
                            <div> 
                                <h1>Chosen delivery id: {deliveryTypeId? deliveryTypeId : 'None'}</h1> 
                                <WithListHOC WrappedComponent={ChooseDeliveryTypeComponent} API_LINK={STATIC_LINKS.DELIVERY_TYPES} 
                                    setCartItems={disableSubmtion? () => null : setDeliveryTypeId} />
                            </ div>
                        )
                    case 3: 
                        return <CreateAddressComponent address={address} setAddress={setAddress} disableSubmtion={disableSubmtion} />;
                    case 4:
                        return <ConfirmOrderComponent cartItems={cartItems} setCartItems={setCartItems} address={address} 
                            deliveryTypeId={deliveryTypeId} setDeliveryTypeId={setDeliveryTypeId} setAddress={setAddress}
                            setIsModalShown={setIsModalShown} />;
                    default:
                        return {};
                }
            })()}
            <ThankYouModal isModalShown={isModalShown} modalMessage={modalMessage}/>
        </div>
    );
}

ShoppingCart.defaultProps = { 
    localStorageNames: {
        deliveryTypeId: "presentDeliveryTypeId",
        address: 'presentAddress'
    }
};