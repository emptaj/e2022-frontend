import React from "react";

import './App.css';
import Products from './pages/Products';
import MenuDrawer from "./components/MenuDrawer";
import { styled, Container } from '@mui/material';
import { Grid } from "@mui/material";

function App() {
    return (

        <Grid container>
            <Grid item>
                <MenuDrawer />
            </Grid>
            <Grid item md={10} xs={6} sm={4}>
                <Products />

            </Grid>
        </Grid >
    );
}

export default App;
