import React, { useEffect, useRef, useState } from "react";

import './App.css';
import Products from './pages/Products';
import MenuDrawer from "./components/MenuDrawer";
import { Grid } from "@mui/material";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Error from "./pages/Error";
import Login from "./pages/Login";
import Warehouses from "./pages/Warehouses";
import { API_LINKS } from "./constants/API_LINKS";
import ShoppingCart from "./pages/ShoppingCart";

function App() {
    const [cartItems, setCartItems] = useState(() => {
        const localData = localStorage.getItem('cartItems');
        return localData ? JSON.parse(localData) : [];
    })

    useEffect(() =>  localStorage.setItem('cartItems', JSON.stringify(cartItems)), [cartItems])

    return (
        <Router>
            <Grid container>
                <Grid item>
                    <MenuDrawer />
                </Grid>
                <Grid item md={8} xs={8} sm={4}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/products" element={<Products API_LINK={API_LINKS.PRODUCTS} setCartItems={setCartItems}/>} />
                        <Route path="/warehouses" element={<Warehouses API_LINK={API_LINKS.WAREHOUSES} />} />
                        <Route path="/warehouses/:warehouseId/products" element={<Products API_LINK={API_LINKS.WAREHOUSES_ID_PRODUCTS} />} />
                        <Route path="/orders" element={<ShoppingCart cartItems={cartItems} setCartItems={setCartItems} />} />
                        <Route path="*" element={<Error />} />
                    </Routes>

                </Grid>
            </Grid >
        </Router>
    );
}

export default App;
