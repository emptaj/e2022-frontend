import React, { useEffect, useRef, useState } from "react";

import './App.css';
import Products from './pages/Products';
import MenuDrawer from "./components/MenuDrawer";
import { Grid } from "@mui/material";
import SignUp from "./pages/SignUp";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Error from "./pages/Error";
import SignIn from "./pages/SignIn";
import Warehouses from "./pages/Warehouses";
import { STATIC_LINKS, API_LINK_WAREHOUSES_ID_PRODUCTS } from "./constants/API_LINKS";
import ShoppingCart from "./pages/ShoppingCart";

function App() {
    const [cartItems, setCartItems] = useState(() => {
        const localData = localStorage.getItem('cartItems');
        return localData ? JSON.parse(localData): [];
    })

    useEffect(() =>  localStorage.setItem('cartItems', JSON.stringify(cartItems)), 
    [cartItems])

    return (
        <Router>
            <Grid container>
                <Grid item>
                    <MenuDrawer />
                </Grid>
                <Grid item md={8} xs={8} sm={4}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<SignIn />} />
                        <Route path="/register" element={<SignUp />} />
                        <Route path="/products" element={<Products API_LINK={STATIC_LINKS.PRODUCTS} setCartItems={setCartItems}/>} />
                        <Route path="/warehouses" element={<Warehouses API_LINK={STATIC_LINKS.WAREHOUSES} />} />
                        <Route path="/warehouses/:warehouseId/products" element={<Products API_LINK={API_LINK_WAREHOUSES_ID_PRODUCTS} setCartItems={setCartItems}/>} />
                        <Route path="/orders" element={<ShoppingCart cartItems={cartItems} setCartItems={setCartItems} />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                </Grid>
            </Grid >
        </Router>
    );
}

export default App;
