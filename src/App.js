import React from "react";

import './App.css';
import Products from './pages/Products';
import MenuDrawer from "./components/MenuDrawer";
import { Grid } from "@mui/material";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Error from "./pages/Error";
function App() {
    return (

        <Grid container>
            <Grid item>
                <MenuDrawer />
            </Grid>
            <Grid item md={10} xs={6} sm={4}>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                </Router>
            </Grid>
        </Grid >
    );
}

export default App;
