import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LoginIcon from '@mui/icons-material/Login';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import WarehouseIcon from '@mui/icons-material/Warehouse';


export default [{
    text: 'Home',
    icon: <HomeIcon />,
    linkTo: '/'
},
{
    text: 'Catalog',
    icon: <Inventory2Icon />,
    linkTo: '/products'
},
{
    text: 'Warehouses',
    icon: <WarehouseIcon />,
    linkTo: '/warehouses'
},
{
    text: 'Shopping cart',
    icon: <LocalGroceryStoreIcon />,
    linkTo: '/shopping-cart'
},
{
    text: 'Log in',
    icon: <LoginIcon />,
    linkTo: '/login'
},
{
    text: 'Register',
    icon: <HowToRegIcon />,
    linkTo: '/register'
},
{
    text: 'Profile',
    icon: <ManageAccountsIcon />,
    linkTo: '/profile'
}
]