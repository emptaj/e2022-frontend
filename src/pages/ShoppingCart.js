import { Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

import ShoppingCartComponent from "../components/ShoppingCartComponent";

export default function ShoppingCart({cartItems, setCartItems}) {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <div>
            <h1> Place your order </h1>
            <Box>
                <Tabs
                    value={value}
                    onChange={handleChange}
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
            <ShoppingCartComponent cartItems={cartItems} setCartItems={setCartItems}/>
        </div>
    );
}
