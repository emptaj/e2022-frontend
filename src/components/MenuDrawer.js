import React from "react";
import { useState } from "react";
import MuiDrawer from "@mui/material/Drawer"
import MenuIcon from '@mui/icons-material/Menu';
import { styled, Container, Toolbar, IconButton, Divider } from '@mui/material';

import Menu from "./Menu";

const StyledDrawer = styled(MuiDrawer)({
    width: "200px",

});

const MenuDrawer = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevMobileOpen) => !prevMobileOpen)
    }
    return (
        <div>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' }, align: 'center' }}
                >
                    <MenuIcon />

                </IconButton>
            </Toolbar>
            <Toolbar>
                <StyledDrawer
                    variant="temporary"
                    anchor='left'
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box' },
                    }}>
                    <Toolbar>
                        <Menu />
                    </Toolbar>

                </StyledDrawer >
            </Toolbar>
            <Toolbar>
                <StyledDrawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box' },
                    }}
                    open
                >
                    <Toolbar>
                        <Menu />
                    </Toolbar>
                </StyledDrawer>
            </Toolbar>
        </div>
    )
}

export default MenuDrawer;
