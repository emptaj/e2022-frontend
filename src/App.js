import React from "react";

import './App.css';
import Products from './pages/Products';
import MenuDrawer from "./components/MenuDrawer";
import { Grid } from "@mui/material";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home";
import Error from "./pages/Error";
import Login from "./pages/Login";
import Warehouses from "./pages/Warehouses";

function App() {
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
                        <Route path="/products" element={<Products API_LINK={'http://localhost:8080/api/products'}/>} />
                        <Route path="/warehouses" element={<Warehouses API_LINK={'http://localhost:8080/api/warehouses'} />} />
                        <Route path="/warehouses/:warehouseId/products" element={<Products API_LINK={`http://localhost:8080/api/warehouses/:warehouseId/products`} />} />
                        <Route path="*" element={<Error />} />
                    </Routes>

                </Grid>
            </Grid >
        </Router>
    );
}

export default App;
