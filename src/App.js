import React from "react";

import './App.css';
import Products from './pages/Products';
import MenuDrawer from "./components/MenuDrawer";
import { styled, Container } from '@mui/material';

function App() {
    return (
        <div>
            <MenuDrawer />
            <Container>

                <Products />
            </Container>
        </div>
    );
}

export default App;
