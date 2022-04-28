import React from "react";
import MuiDrawer from "@mui/material/Drawer"
import { styled } from '@mui/material';

import Menu from "./Menu";

const StyledDrawer = styled(MuiDrawer)({
    width: "200px",

});

const MenuDrawer = () => {
    return (
        <div>
            <StyledDrawer variant="permanent">

                <Menu />

            </StyledDrawer >
        </div>
    )
}

export default MenuDrawer;