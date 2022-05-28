import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import LoginIcon from '@mui/icons-material/Login';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';


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
    text: 'Orders',
    icon: <LocalGroceryStoreIcon />,
    linkTo: '/orders'
},
{
    text: 'Log in',
    icon: <LoginIcon />,
    linkTo: '/login'
},
{
    text: 'Profile',
    icon: <ManageAccountsIcon />,
    linkTo: '/profile'
}
]